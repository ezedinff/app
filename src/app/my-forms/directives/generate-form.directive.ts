import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[generateForm]'
})
export class GenerateFormDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
