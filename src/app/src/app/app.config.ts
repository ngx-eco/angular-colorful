import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideServiceWorker} from '@angular/service-worker';
import {RouterModule} from '@angular/router';
import {
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  NgDocDefaultSearchEngine,
  provideMainPageProcessor,
  provideNgDocApp,
  providePageSkeleton,
  provideSearchEngine
} from '@ng-doc/app';
import {provideNgDocContext} from '@ng-doc/generated';
import {appRouting, appRoutingOptions} from './app.routing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideNgDocApp(),
    provideNgDocContext(),
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
    importProvidersFrom(RouterModule.forRoot(appRouting, appRoutingOptions)),
    provideSearchEngine(NgDocDefaultSearchEngine),
  ]
};
