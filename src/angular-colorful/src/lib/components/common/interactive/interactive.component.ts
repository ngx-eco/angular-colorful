// Angular
import { Component, Input, HostListener, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

// Project
import { clamp } from '../../../utils/clamp';



@Component({
  selector: 'interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss']
})
export class InteractiveComponent implements OnInit {

  @Input() public top: string;
  @Input() public left: string;
  @Input() public color: string;

  element: HTMLElement;

  constructor(
    private el: ElementRef,
  ) {
    this.element = this.el.nativeElement;
  }

  @Output() onMove = new EventEmitter();

  @HostListener('mousedown', ['$event']) onMouseDown($event) {
    this.getRelativePosition(this.element as HTMLDivElement, $event);
  }

  @HostListener('mousemove', ['$event']) onMouseMove($event) {
    this.getRelativePosition(this.element as HTMLDivElement, $event);
  }

  ngOnInit(): void {
  }

  isTouch = (e: MouseEvent | TouchEvent) => 'touches' in e;

  getRelativePosition = (node: HTMLDivElement, event: MouseEvent | TouchEvent): void => {
    const pointer = this.isTouch(event) ? (event as TouchEvent).touches[0] : (event as MouseEvent);
    const rect = node.getBoundingClientRect();
    const x = clamp(Math.round((100 * (pointer.clientX - rect.left)) / node.clientWidth), 0, 100);
    const y = clamp(Math.round((100 * (pointer.clientY - rect.top)) / node.clientHeight), 0, 100);
    this.onMove.emit({left: x, top: y});
  }

}
