import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-detail-box',
  styleUrls: ['./detail-box.component.scss'],
  templateUrl: './detail-box-component.html'
})
export class DetailBoxComponent {
  @Input() title;
  @Output() editClicked = new EventEmitter();
  @Input() message;
  edit($event) {
    this.editClicked.emit();
  }
}
