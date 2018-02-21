import { Routes } from '@angular/router';

import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryListComponent } from './entry-list/entry-list.component';

export const routes: Routes = [
  { path: '', component: EntryListComponent },
  { path: 'entry/:id', component: SingleEntryComponent },
  { path: '**', redirectTo: '' }
];
