import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class NotesService {
  notes: Array<string> = [];
  isOpen = false;

  constructor(private loggingService: LoggingService) {}

  getNotesFromLocalStorage(): void {
    if (localStorage.getItem('notes')?.length > 0) {
      this.notes.push(...JSON.parse(localStorage.getItem('notes')));
    }
  }

  onNoteDeleted(noteData: { currentNote: string }): void {
    const currentNoteIndex = this.notes.indexOf(noteData.currentNote);

    this.notes.splice(currentNoteIndex, 1);

    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.loggingService.logEventToConsole('deleting...');
  }

  onNoteAdded(note: string): void {
    this.notes.push(note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.loggingService.logEventToConsole('adding...');
  }
}
