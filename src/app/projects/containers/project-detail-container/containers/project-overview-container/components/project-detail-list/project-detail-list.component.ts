import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-detail-list',
  styleUrls: ['./project-detail-list.component.scss'],
  templateUrl: './project-detail-list.component.html'
})
export class ProjectDetailListComponent implements OnInit{
  @Input() details: string;

  ngOnInit(): void {
  }
}
