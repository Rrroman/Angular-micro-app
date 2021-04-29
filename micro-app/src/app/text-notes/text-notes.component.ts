import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-notes',
  templateUrl: './text-notes.component.html',
  styleUrls: ['./text-notes.component.scss'],
})
export class TextNotesComponent implements OnInit {
  note: string = '';
  isTyping: boolean = false;
  color: string;
  notes: Array<string> = [];

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('notes').length > 0) {
      this.notes.push(...JSON.parse(localStorage.getItem('notes')));
    }
  }

  onTypingNote(event: Event) {
    this.note = (<HTMLInputElement>event.target).value;
    this.colorize();

    if (this.isTyping) {
      return;
    }

    this.isTyping = true;
    setTimeout(() => {
      this.isTyping = false;
    }, 2000);
  }

  onDeleteNote(currentNote) {
    console.log(currentNote);
    this.notes = this.notes.filter((note) => note !== currentNote);
  }

  addNote() {
    this.notes.push(this.note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.note = '';
  }

  colorize() {
    this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
