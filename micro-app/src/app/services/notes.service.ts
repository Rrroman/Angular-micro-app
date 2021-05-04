export class NotesService {
  notes: Array<string> = [];

  constructor() {}

  getNotesFromLocalStorage(): void {
    if (localStorage.getItem('notes')?.length > 0) {
      this.notes.push(...JSON.parse(localStorage.getItem('notes')));
    }
  }

  onNoteDeleted(noteData: { currentNote: string }): void {
    const currentNoteIndex = this.notes.indexOf(noteData.currentNote);

    this.notes.splice(currentNoteIndex, 1);

    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  onNoteAdded(note: string): void {
    this.notes.push(note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
