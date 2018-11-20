import {Injectable} from '@angular/core';
import {HttpService} from '../http';

@Injectable({providedIn: 'root'})
export class MyFormService {
  api_url = '/forms';
  constructor(private httpService: HttpService) {}
  getForms() {
    return this.httpService.get(this.api_url);
  }
}
