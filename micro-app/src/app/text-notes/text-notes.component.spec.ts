import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNotesComponent } from './text-notes.component';

describe('TextNotesComponent', () => {
  let component: TextNotesComponent;
  let fixture: ComponentFixture<TextNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
