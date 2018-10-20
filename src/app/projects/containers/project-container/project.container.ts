import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-container',
  styleUrls: ['./project.container.scss'],
  templateUrl: './project.container.html'
})
export class ProjectContainer implements OnInit{
  title = 'My Projects';
  ngOnInit(): void {
  }
}
