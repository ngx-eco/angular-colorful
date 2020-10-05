// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App
import { AppComponent } from './app.component';

// Project
import { AngularColorfulModule } from 'angular-colorful';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularColorfulModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
