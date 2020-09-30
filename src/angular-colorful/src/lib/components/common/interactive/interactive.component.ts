// Angular
import { Component, Input, HostListener, OnInit, DoCheck, ElementRef } from '@angular/core';

// Project



@Component({
  selector: 'interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss']
})
export class InteractiveComponent implements OnInit, DoCheck {

  @Input() public top: string;
  @Input() public left: string;

  private _color: string;

  @Input() public set color(color: string) {
    this._color = color;
  }

  public get color() : string {
    return this._color
  }
  

  constructor(
  ) {
  }

  @HostListener("mousedown", ['$event']) onMouseDown($event) {
    // console.log(this.getRelativePosition($event));
  }
  
  @HostListener("touchstart") onTouchStart() {
    
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
  }

}
