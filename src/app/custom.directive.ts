import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[custom]'
})
export class CustomDirective {
  @Input() set custom(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }
  constructor(private templateRef : TemplateRef<any>, private vcRef : ViewContainerRef) { }

}
