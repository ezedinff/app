import {Injectable} from '@angular/core';
import {HttpService} from '../http';
import {FormAttributes} from '../../models/model attributes/model-attributes';

@Injectable({providedIn: 'root'})
export class FormDesignService {
  api_url = '/forms';
  constructor(private httpService: HttpService) {}
  createForm(form: FormAttributes) {
    console.log(form);
    return this.httpService.post(this.api_url, JSON.stringify(form));
  }
}
