import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-text-note',
  templateUrl: './text-note.component.html',
  styleUrls: ['./text-note.component.scss'],
})
export class TextNoteComponent implements OnInit {
  @Input() note: string;
  @Input() noteIndex: number;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {}

  onNoteDeleted(): void {
    this.notesService.onNoteDeleted({ currentNote: this.note });
  }
}
