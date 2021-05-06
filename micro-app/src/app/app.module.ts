import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ProjectsComponent } from './projects/projects.component';
import { TextNotesComponent } from './text-notes/text-notes.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { TextNoteComponent } from './text-notes/text-note/text-note.component';
import { AddNoteComponent } from './text-notes/add-note/add-note.component';
import { StyleTextDirective } from './style-text/style-text.directive';
import { NotesService } from './services/notes.service';
import { LoggingService } from './services/logging.service';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ProjectsComponent,
    HeaderComponent,
    FooterComponent,
    TextNotesComponent,
    TextNoteComponent,
    AddNoteComponent,
    StyleTextDirective,
    CurrencyExchangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [NotesService, LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
