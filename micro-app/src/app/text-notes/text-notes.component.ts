import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-notes',
  templateUrl: './text-notes.component.html',
  styleUrls: ['./text-notes.component.scss'],
})
export class TextNotesComponent implements OnInit {
  note = '';
  isTyping = false;
  color: string;
  notes: Array<string> = [];

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('notes')?.length > 0) {
      this.notes.push(...JSON.parse(localStorage.getItem('notes')));
    }
  }

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

  onNoteDeleted(noteData: { currentNote: string }): void {
    this.notes = this.notes.filter((note) => note !== noteData.currentNote);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
  // onNoteDeleted(currentNote: string): void {
  //   this.notes = this.notes.filter((note) => note !== currentNote);
  //   localStorage.setItem('notes', JSON.stringify(this.notes));
  // }

  addNote(): void {
    this.notes.push(this.note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.note = '';
  }

  colorize(): void {
    this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
