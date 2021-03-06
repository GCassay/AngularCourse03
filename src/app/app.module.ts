import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerFormComponent } from './server-form/server-form.component';
import { ServerElementComponent } from './server-element/server-element.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerFormComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
