import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-text-notes',
  templateUrl: './text-notes.component.html',
  styleUrls: ['./text-notes.component.scss'],
})
export class TextNotesComponent implements OnInit {
  notes: Array<string>;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notes = this.notesService.notes;
  }

  // ngOnInit(): void {
  // if (localStorage.getItem('notes')?.length > 0) {
  //   this.notes.push(...JSON.parse(localStorage.getItem('notes')));
  // }
  // }

  // onNoteDeleted(noteData: { currentNote: string }): void {
  //   this.notes = this.notes.filter((note) => note !== noteData.currentNote);
  //   localStorage.setItem('notes', JSON.stringify(this.notes));
  // }

  // onNoteAdded(note: string): void {
  //   this.notes.push(note);
  //   localStorage.setItem('notes', JSON.stringify(this.notes));
  // }
}
