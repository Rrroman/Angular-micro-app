import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  notes: Array<string>;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notes = this.notesService.notes;
  }
}
