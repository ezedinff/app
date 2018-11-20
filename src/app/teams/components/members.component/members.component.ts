import {Component} from '@angular/core';

@Component({
  selector: 'app-member',
  styleUrls: ['./members.component.scss'],
  templateUrl: './members.component.html'
})
export class MembersComponent {
  setting = {
    columns: [
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
  getAction(data: Object) {
    console.log(data);
  }
}
