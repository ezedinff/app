import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ez-table',
  styleUrls: ['./ez-table.component..scss'],
  templateUrl: './ez-table.component.html'
})
export class EzTableComponent implements OnInit{
  @Input() setting;
  @Input() datas;
  @Input() type;
  @Input() title;
  @Output() actionPerformed = new EventEmitter();
  config = {
    suppressScrollY: true,
    useBothWheelAxes: true
  };
  width;
  emitAction(actionType: string, id: number) {
    const data = {
      type: this.type,
      action: actionType,
      id: id
    };
    this.actionPerformed.emit(data);
  }

  ngOnInit(): void {
    this.width = 100 / this.setting.columns.length;
  }
}
