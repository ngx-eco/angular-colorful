import {NG_DOC_ROUTING} from '@ng-doc/generated';
import {DocsComponent} from './docs.component';
import {Routes} from '@angular/router';

export const docsRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start',
  },
  {
    path: '',
    component: DocsComponent,
    children: NG_DOC_ROUTING,
  },
];
