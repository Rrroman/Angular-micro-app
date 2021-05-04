import { Component, OnInit } from '@angular/core';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  notes: Array<string> = [];
  title = 'micro-app';

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService.getNotesFromLocalStorage();
    this.notes = this.notesService.notes;
  }
}
