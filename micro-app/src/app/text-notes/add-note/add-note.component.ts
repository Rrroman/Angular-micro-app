import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
  providers: [LoggingService],
})
export class AddNoteComponent implements OnInit {
  @Output() noteAdded = new EventEmitter<string>();
  note = '';
  isTyping = false;
  color: string;

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {}

  onTypingNote(event: Event): void {
    this.note = (event.target as HTMLInputElement).value;
    this.colorize();

    if (this.isTyping) {
      return;
    }

    this.isTyping = true;
    setTimeout(() => {
      this.isTyping = false;
    }, 2000);
  }

  onNoteAdded(event): void {
    this.noteAdded.emit(this.note);
    this.note = '';
    this.loggingService.logEventToConsole(
      event.target.querySelector('.mat-button-wrapper').textContent
    );
  }

  colorize(): void {
    this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
