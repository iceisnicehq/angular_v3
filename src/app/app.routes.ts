import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'table', component: TableComponent },
  { path: 'main', component: MainComponent },
  {path: '**', component: PageNotFoundComponent}

];
