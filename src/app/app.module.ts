// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// Server
import { ServiceWorkerModule } from '@angular/service-worker';

// Project
import { AngularColorfulModule } from 'angular-colorful';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularColorfulModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
