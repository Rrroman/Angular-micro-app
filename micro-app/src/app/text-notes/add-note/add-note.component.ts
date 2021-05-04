import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  note = '';
  isTyping = false;
  color: string;
  typingStatusDelay = 2000;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {}

  onTypingNote(event: Event): void {
    this.note = (event.target as HTMLInputElement).value;
    this.colorize();

    if (this.isTyping) {
      return;
    }

    this.isTyping = true;
    setTimeout(() => {
      this.isTyping = false;
    }, this.typingStatusDelay);
  }

  onNoteAdded(): void {
    this.notesService.onNoteAdded(this.note);
    this.note = '';
  }

  colorize(): void {
    this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
