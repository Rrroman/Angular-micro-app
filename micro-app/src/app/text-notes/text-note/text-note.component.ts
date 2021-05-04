import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-text-note',
  templateUrl: './text-note.component.html',
  styleUrls: ['./text-note.component.scss'],
  providers: [LoggingService],
})
export class TextNoteComponent implements OnInit {
  @Input() note: string;
  @Input() noteIndex: number;
  @Output() deleteNote = new EventEmitter<{ currentNote: string }>();

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {}

  onNoteDeleted(event): void {
    this.deleteNote.emit({ currentNote: this.note });
    this.loggingService.logEventToConsole(event.target.textContent);
  }
}
