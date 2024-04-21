import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './entities/components/table/table.component';
import { MainComponent } from './entities/components/main/main.component';
import {
  RouterLinkActive,
  RouterLink,
  RouterOutlet,
  provideRouter,
} from '@angular/router';
import { routes } from './app.routes';
import { PageNotFoundComponent } from './entities/components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MainComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    BrowserAnimationsModule,
    MatGridListModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
