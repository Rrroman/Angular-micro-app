import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-text-note',
  templateUrl: './text-note.component.html',
  styleUrls: ['./text-note.component.scss'],
})
export class TextNoteComponent implements OnInit, OnDestroy {
  @Input() note: string;
  @Input() noteIndex: number;
  isOpen: boolean;
  paramSubscription: Subscription;

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.isOpen = this.notesService.isOpen;

    if (id) {
      const allNotes = this.notesService.notes;
      this.note = allNotes[id];
    }
    this.paramSubscription = this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.notesService.isOpen = false;
      } else if (params.id && params.id.length > 0) {
        this.notesService.isOpen = true;
      }
    });
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  onOpen(): void {
    this.notesService.isOpen = true;
  }

  onBack(): void {
    this.notesService.isOpen = false;
  }

  onNoteDeleted(): void {
    this.notesService.onNoteDeleted({ currentNote: this.note });
  }
}
