import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ez-table',
  styleUrls: ['./ez-table.component..scss'],
  templateUrl: './ez-table.component.html'
})
export class EzTableComponent {
  @Input() setting;
  @Input() datas;
  @Input() type;
  @Output() actionPerformed = new EventEmitter();
  emitAction(actionType: string, id: number) {
    const data = {
      type: this.type,
      action: actionType,
      id: id
    };
    this.actionPerformed.emit(data);
  }
}
