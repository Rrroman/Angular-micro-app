import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ProjectsComponent } from './projects/projects.component';
import { CurrencyService } from './services/currency.service';
import { LoggingService } from './services/logging.service';
import { NotesService } from './services/notes.service';
import { StyleTextDirective } from './style-text/style-text.directive';
import { AddNoteComponent } from './text-notes/add-note/add-note.component';
import { TextNoteComponent } from './text-notes/text-note/text-note.component';
import { TextNotesComponent } from './text-notes/text-notes.component';

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
    MatSelectModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [NotesService, LoggingService, CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
