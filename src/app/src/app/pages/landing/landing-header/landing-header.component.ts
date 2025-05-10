import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AngularColorfulModule} from 'angular-colorful';
import {ColorService} from '../../../core/services/color.service';

@Component({
    selector: 'app-landing-header',
    templateUrl: './landing-header.component.html',
    styleUrls: ['./landing-header.component.scss'],
    imports: [
        CommonModule,
        RouterModule,
        AngularColorfulModule,
    ]
})
export class LandingHeaderComponent implements OnInit {

  constructor(
    public color: ColorService,
  ) {
  }

  ngOnInit(): void {
    this.color.init();
  }
}
