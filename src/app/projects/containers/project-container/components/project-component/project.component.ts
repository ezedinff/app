import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  styleUrls: ['./project.component.scss'],
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  goToDetail() {
    this.router.navigate(['/projects/detail/overview']);
  }
}
