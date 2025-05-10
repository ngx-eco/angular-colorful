import {isDevMode} from "@angular/core";
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, withInMemoryScrolling} from "@angular/router";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {provideServiceWorker} from "@angular/service-worker";
import {AppComponent} from './app/app.component';
import {appRouting} from "./app/app.routing";
import {provideAnimations} from "@angular/platform-browser/animations";
import {
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  NgDocDefaultSearchEngine,
  provideMainPageProcessor,
  provideNgDocApp,
  providePageSkeleton,
  provideSearchEngine
} from "@ng-doc/app";
import { provideNgDocContext } from '@ng-doc/generated';

// withEnabledBlockingInitialNavigation()

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideRouter(
      appRouting,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),

    provideNgDocApp(),
    provideNgDocContext(),
    provideSearchEngine(NgDocDefaultSearchEngine),
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
  ],
}).catch((err) => console.error(err));
