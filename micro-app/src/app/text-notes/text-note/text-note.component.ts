import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-text-note',
  templateUrl: './text-note.component.html',
  styleUrls: ['./text-note.component.scss'],
  providers: [LoggingService],
})
export class TextNoteComponent implements OnInit {
  @Input() note: string;
  @Input() noteIndex: number;

  constructor(
    private loggingService: LoggingService,
    private notesService: NotesService
  ) {}

  ngOnInit(): void {}

  onNoteDeleted(event): void {
    this.notesService.onNoteDeleted({ currentNote: this.note });
    this.loggingService.logEventToConsole(event.target.textContent);
  }
}
