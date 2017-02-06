import {Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = 'green';
  };

  @HostListener('mouseleave') mouseleaver(){
    this.backgroundColor = 'red';
  };

  @HostListener('click', ['$event']) onClick(event){
    console.log("Event Target:" + event.target + event.toString());
    this.backgroundColor = 'pink';
  };

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };

  private backgroundColor = 'red';

  constructor() {}


}
