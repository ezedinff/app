import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../../../shared/models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TeamSandbox} from '../../sandbox/team.sandbox';

@Component({
  selector: 'team',
  template: '<form style="padding: 24px;" novalidate [formGroup]="generalForm">' +
    '<p>' +
    '<mat-form-field class="full-width">' +
    '<input type="text" formControlName="name" matInput placeholder="team title">' +
    '</mat-form-field>' +
    '</p>' +
    '<p>' +
    '<mat-form-field class="full-width" *ngIf="projects$ | async as projects">' +
    '<mat-select placeholder="select project" formGroupName="project_id">' +
    '<mat-option *ngFor="let project of projects" [value]="project?.id">{{project?.attributes?.name}}</mat-option>' +
    '</mat-select></mat-form-field>' +
    '</p>' +
    '<button mat-raised-button color="primary"' +
    ' type="submit" (click)="submit()"' +
    ' class="submit-button text-floral-white"' +
    ' [disabled]="generalForm.invalid">' +
    '<mat-icon iconsmall>save</mat-icon>Save</button>' +
    '</form>',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  projects$: Observable<Project[]>;
  generalForm: FormGroup;
  constructor(private teamSandbox: TeamSandbox, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.projects$ = this.teamSandbox.projects$;
    this.createForm();
  }
  createForm() {
    this.generalForm = this.fb.group({
      project_id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }
}
