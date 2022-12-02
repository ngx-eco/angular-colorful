// Angular
import {Component, Input, HostListener, OnInit, Output, EventEmitter, ElementRef} from '@angular/core';

// Project
import {clamp} from '../../../utils/clamp';
import {Interaction} from '../../../interfaces/interaction.interface';


@Component({
  selector: 'interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss'],
})
export class InteractiveComponent implements OnInit {

  @Input() public top = '';
  @Input() public left = '';
  @Input() public color = '';

  element: HTMLElement;

  hasTouched = false;

  constructor(
    private el: ElementRef,
  ) {
    this.element = this.el.nativeElement;
  }

  @Output() move = new EventEmitter();

  @HostListener('mousedown', ['$event']) onMouseDown($event: any): void {
    this.handleEvent($event);
  }

  @HostListener('touchstart', ['$event']) onTouchStart($event: any): void {
    this.handleEvent($event);
  }

  ngOnInit(): void {
  }

  isTouch = (event: MouseEvent | TouchEvent) => 'touches' in event;

  getRelativePosition = (node: HTMLDivElement, event: MouseEvent | TouchEvent): void => {
    const pointer = this.isTouch(event) ? (event as TouchEvent).touches[0] : (event as MouseEvent);
    const rect = node.getBoundingClientRect();
    const interactive: Interaction = {
      left: clamp(Math.round((100 * (pointer.clientX - rect.left)) / node.clientWidth), 0, 100),
      top: clamp(Math.round((100 * (pointer.clientY - rect.top)) / node.clientHeight), 0, 100),
    };
    this.move.emit(interactive);
  }

  limit = (num: number) => (num > 1 ? 1 : num < 0 ? 0 : num);

  // Prevent mobile browsers from handling mouse events (conflicting with touch ones).
  // If we detected a touch interaction before, we prefer reacting to touch events only.
  isValid = (event: MouseEvent | TouchEvent): boolean => {
    if (this.hasTouched && !this.isTouch(event)) {
      return false;
    }
    if (!this.hasTouched) {
      this.hasTouched = this.isTouch(event);
    }
    return true;
  }

  set dragging(state: boolean) {
    const toggleEvent = state ? document.addEventListener : document.removeEventListener;
    toggleEvent(this.hasTouched ? 'touchmove' : 'mousemove', this);
    toggleEvent(this.hasTouched ? 'touchend' : 'mouseup', this);
  }

  handleEvent(event: MouseEvent | TouchEvent): void {
    switch (event.type) {
      case 'mousedown':
      case 'touchstart':
        event.preventDefault();
        // event.button is 0 in mousedown for left button activation
        if (!this.isValid(event) || (!this.hasTouched && (event as MouseEvent).button !== 0)) {
          return;
        }
        this.getRelativePosition(this.element.firstChild as HTMLDivElement, event);
        this.dragging = true;
        break;
      case 'mousemove':
      case 'touchmove':
        event.preventDefault();
        this.getRelativePosition(this.element.firstChild as HTMLDivElement, event);
        break;
      case 'mouseup':
      case 'touchend':
        this.dragging = false;
        break;
    }
  }

}
