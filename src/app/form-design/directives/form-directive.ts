import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[dynamicForm]',
})
export class FormDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
