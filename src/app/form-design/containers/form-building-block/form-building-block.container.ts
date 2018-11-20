import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'form-building-block',
  template: '<form-building-block-item (selectedElement)="getSelectedElement($event)"></form-building-block-item>'
})
export class FormBuildingBlockContainer {
  @Output() elementSelected = new EventEmitter();
  getSelectedElement(element: string) {
    this.elementSelected.emit(element);
  }
}
