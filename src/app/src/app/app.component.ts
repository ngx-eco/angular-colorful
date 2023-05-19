import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {NgDocModule, NgDocNavbarModule, NgDocSidebarModule, NgDocThemeToggleModule} from '@ng-doc/app';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {
  NgDocButtonIconModule,
  NgDocIconModule, NgDocMediaQueryModule,
  NgDocTooltipModule,
  preventInitialChildAnimations
} from '@ng-doc/ui-kit';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgDocModule,
    CommonModule,
    RouterModule,
    NgDocIconModule,
    NgDocNavbarModule,
    NgDocSidebarModule,
    NgDocTooltipModule,
    NgDocButtonIconModule,
    NgDocMediaQueryModule,
    NgDocThemeToggleModule,
  ],
  animations: [preventInitialChildAnimations],
})
export class AppComponent {
  @HostBinding('attr.data-ng-doc-is-landing') get isLandingPage(): boolean {
    return new URL(window.location.href).pathname === '/';
  }
}
