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

  constructor() {}

  ngOnInit(): void {}

  onTypingNote(event: Event): void {
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

  addNote() {
    console.log('Submitting', this.note);
    this.note = '';
  }

  colorize() {
    console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
