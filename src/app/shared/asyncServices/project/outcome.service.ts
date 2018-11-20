import {Injectable} from '@angular/core';
import {HttpService} from '../http';
import {OutcomeAttributes} from '../../models/model attributes/model-attributes';
import {Observable} from 'rxjs';
import {Outcome, Project} from '../../models';

@Injectable({providedIn: 'root'})
export class OutcomeService {
  api_route = '/outcomes';
  constructor(private httpService: HttpService) {}

  public store(outcome: OutcomeAttributes): Observable<Outcome[]> {
    return this.httpService.post(this.api_route, outcome);
  }
  public update(outcome: OutcomeAttributes): Observable<Outcome[]> {
    return this.httpService.put(this.api_route, outcome.id, outcome);
  }
}
