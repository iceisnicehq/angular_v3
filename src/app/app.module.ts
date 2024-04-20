import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MainComponent } from './main/main.component';
import { RouterLinkActive, RouterLink, RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
