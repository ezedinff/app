import {Component, Input, OnInit} from '@angular/core';
import {Beneficariary, Implementer, ProjectCategory, ProjectDetail} from '../../../../../../../shared/models';

@Component({
  selector: 'app-project-detail-list',
  styles: ['.title {font-weight: bold;}']  ,
  templateUrl: './project-detail-list.component.html'
})
export class ProjectDetailListComponent implements OnInit{
  @Input() details: ProjectDetail;
  @Input() category: ProjectCategory;
  @Input() implementers: Implementer[];
  @Input() beneficiaries: Beneficariary[];

  ngOnInit(): void {
  }
}
