import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class DocsComponent {
}
