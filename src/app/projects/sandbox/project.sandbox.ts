import {Injectable} from '@angular/core';
import {BaseSandbox} from '../../shared/sandbox/base.sandbox';
import {Store} from '@ngrx/store';
import * as store from '../../shared/store';
import * as projectAction from '../../shared/store/actions/project.action';
import {Observable, of} from 'rxjs';
import {Project} from '../../shared/models';
import {distinctUntilChanged} from 'rxjs/operators';
@Injectable()
export class ProjectSandbox extends BaseSandbox {
  // activities$ = this.appState$.select(store.activities);
  constructor(protected appState$: Store<store.State>) {
    super(appState$);
  }
  setCurrentSelectedProjectId(project_id: number) {
    this.appState$.select(store.projects).pipe(
      distinctUntilChanged()
    ).subscribe(p => this.appState$.dispatch(new projectAction.SetselectedProjectId(project_id)));
  }
  getCurrentProject(): Observable<Project | {}> {
    return this.appState$.select(store.currentProject);
  }
}
