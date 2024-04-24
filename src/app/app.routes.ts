import { Routes } from '@angular/router';
import { TableComponent } from './entities/components/table/table.component';
import { MainComponent } from './entities/components/main/main.component';
import { PageNotFoundComponent } from './entities/components/page-not-found/page-not-found.component';

/**
 * массив путей для Routing
 *
 * @type {Routes}
 */
export const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'table', component: TableComponent },
  {path: 'main', component: MainComponent },
  {path: '**', component: PageNotFoundComponent}
];
