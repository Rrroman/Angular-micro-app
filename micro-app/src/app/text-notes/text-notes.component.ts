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
}
