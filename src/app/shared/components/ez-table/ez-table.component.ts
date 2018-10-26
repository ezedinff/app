import {Component} from '@angular/core';

@Component({
  selector: 'ez-table',
  styleUrls: ['./ez-table.component..scss'],
  templateUrl: './ez-table.component.html'
})
export class EzTableComponent {
  setting = {
    columns: [
      {
        title: 'No',
        prop: 'id'
      },
      {
        title: 'Full Name',
        prop: 'name'
      },
      {
        title: 'Email',
        prop: 'email'
      },
      {
        title: 'Age',
        prop: 'age'
      },
      {
        title: 'actions'
      }
    ],
    actions: [
      {
        title: 'edit',
        icon: 'edit',
        type: 'edit'
      },
      {
        title: 'delete',
        icon: 'delete',
        type: 'delete'
      },
    ]
  };
  datas = [
    {
      id: 1,
      name: 'Ezedin Fedlu',
      email: 'ezedin.fedlu@gmail.comezedin.fedlu@gmail.com',
      age: 23
    },
    {
      id: 2,
      name: 'Messeret Kassaye',
      email: 'messyu@gmail.com',
      age: 23
    },
  ];
  maxheight = `${this.setting.columns.length * 33}px`;
  config = {
    suppressScrollY: true,
    useBothWheelAxes: true
  };
}
