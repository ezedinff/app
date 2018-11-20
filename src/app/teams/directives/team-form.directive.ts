import {Component, Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[teamFormDirective]'
})
export class TeamFormDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
