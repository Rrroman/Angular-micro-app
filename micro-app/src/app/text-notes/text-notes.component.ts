import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-notes',
  templateUrl: './text-notes.component.html',
  styleUrls: ['./text-notes.component.scss'],
})
export class TextNotesComponent implements OnInit {
  note: string = '';

  constructor() {}

  ngOnInit(): void {}

  onTypingNote(event: Event): void {
    this.note = (<HTMLInputElement>event.target).value;
  }

  addNote() {
    console.log('Submitting', this.note);
  }
}
