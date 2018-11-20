import {Injectable} from '@angular/core';
import {HttpService} from '../../asyncServices/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LayoutService {
  constructor(private httpService: HttpService) {}
  getMetaData(): Observable<any> {
    return this.httpService.get('/meta-data');
  }
  getMainData(): Observable<any> {
    return this.httpService.get('/main-data');
  }
}
