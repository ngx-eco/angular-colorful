import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent, NgDocThemeToggleComponent} from '@ng-doc/app';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {
  NgDocButtonIconComponent,
  NgDocIconComponent,
  NgDocTooltipDirective,
  preventInitialChildAnimations
} from '@ng-doc/ui-kit';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        NgDocRootComponent,
        NgDocIconComponent,
        NgDocNavbarComponent,
        NgDocTooltipDirective,
        NgDocSidebarComponent,
        NgDocButtonIconComponent,
        NgDocThemeToggleComponent,
    ],
    animations: [preventInitialChildAnimations]
})
export class AppComponent {
  @HostBinding('attr.data-ng-doc-is-landing') get isLandingPage(): boolean {
    return new URL(window.location.href).pathname === '/';
  }
}
