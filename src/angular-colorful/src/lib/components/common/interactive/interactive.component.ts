// Angular
import { Component, Input, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss']
})
export class InteractiveComponent implements OnInit {

  @Input() public top: string = '50%';
  @Input() public left: string = '37%';
  @Input() public color: string = 'rgb(103, 81, 68)'
  

  ngOnInit(): void {
  }

}
