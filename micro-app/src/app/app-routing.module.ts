import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { TextNotesComponent } from './text-notes/text-notes.component';
import { ProjectsComponent } from './projects/projects.component';
import { TextNoteComponent } from './text-notes/text-note/text-note.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'text-notes', component: TextNotesComponent },
  { path: 'text-notes/:id', component: TextNoteComponent },
  { path: 'currency-exchange', component: CurrencyExchangeComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
