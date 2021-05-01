import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-note',
  templateUrl: './text-note.component.html',
  styleUrls: ['./text-note.component.scss'],
})
export class TextNoteComponent implements OnInit {
  @Input('textForNote') note: string;
  @Input() noteIndex: number;
  @Output() deleteNote = new EventEmitter<{ currentNote: string }>();

  constructor() {}

  ngOnInit(): void {}

  onNoteDeleted() {
    this.deleteNote.emit({ currentNote: this.note });
  }
}
