import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-team-list',
  styleUrls: ['./team-list.component.scss'],
  templateUrl: './team-list.component.html'
})
export class TeamListComponent {
  id = 1;
  constructor(private router: Router) {}
  toMemebers() {
    this.router.navigate(['/teams', this.id, 'members']);
  }
}

