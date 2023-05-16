import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideServiceWorker} from '@angular/service-worker';
import {RouterModule} from '@angular/router';
import {NgDocDefaultSearchEngine, NgDocModule, provideSearchEngine} from '@ng-doc/app';
import {NG_DOC_ROUTING, NgDocGeneratedModule} from '@ng-doc/generated';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    importProvidersFrom(RouterModule.forRoot(NG_DOC_ROUTING, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 70]
    })),
    importProvidersFrom(NgDocModule.forRoot()),
    importProvidersFrom(NgDocGeneratedModule.forRoot()),
    provideSearchEngine(NgDocDefaultSearchEngine),
  ]
};
