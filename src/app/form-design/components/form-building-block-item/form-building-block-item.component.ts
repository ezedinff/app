import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'form-building-block-item',
  templateUrl: './form-building-block-item.component.html',
  styles: ['.mat-list-item{border-bottom: 1px solid #b6b6b6; padding: 0 !important;} button{position: relative; width: 100%; height: 100%; cursor: move; text-align: left;}',
    'mat-list {padding: 0;}',
    '::ng-deep .mat-list-item-content{padding: 0 !important;}'
  ]
})
export class FormBuildingBlockItemComponent implements OnInit{
  @Output() selectedElement = new EventEmitter();
  dragged;
  fileInputEnabled = true;
  sendSelectedElement(element: string) {
    this.selectedElement.emit(element);
    if (element === 'file') { this.disableFileInput(); }
  }
  disableFileInput() {
    this.fileInputEnabled = false;
  }
  ngOnInit(): void {

  }
}
