import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  @Output() noteAdded = new EventEmitter<string>();
  note = '';
  isTyping = false;
  color: string;

  constructor() {}

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

  onNoteAdded(): void {
    this.noteAdded.emit(this.note);
    this.note = '';
  }

  colorize(): void {
    this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
