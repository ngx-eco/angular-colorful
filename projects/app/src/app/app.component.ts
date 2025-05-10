import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import {NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent, NgDocThemeToggleComponent} from "@ng-doc/app";
import {CommonModule, Location} from '@angular/common';
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
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [preventInitialChildAnimations],
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
})
export class AppComponent {
  protected readonly location = inject(Location);

  @HostBinding('attr.data-ng-doc-is-landing')
  get isLandingPage(): boolean {
    return this.location.path() === '';
  }
}
