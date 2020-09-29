// Angular
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'saturation',
  templateUrl: './saturation.component.html',
  styleUrls: ['./saturation.component.scss']
})
export class SaturationComponent implements OnInit {

  @Input() color: string = 'rgb(255, 98, 0)';

  constructor() { }

  ngOnInit(): void {
  }

}
