import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expenditure-tree',
  styleUrls: ['./expenditure-tree.component.scss'],
  templateUrl: './expenditure-tree.component.html'
})
export class ExpenditureTreeComponent implements OnInit {
  icon: string;

  ngOnInit(): void {
    this.icon = 'chevron_right';
  }

  toggle() {
    this.icon = this.icon === 'chevron_right' ? 'expand_more' : 'chevron_right';
  }
}
