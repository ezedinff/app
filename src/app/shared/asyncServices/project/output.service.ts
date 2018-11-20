import {Injectable} from '@angular/core';
import {HttpService} from '../http';
import {OutputAttributes} from '../../models/model attributes/model-attributes';

@Injectable({providedIn: 'root'})
export class OutputService {
  constructor(private httpService: HttpService) { }
  store(output: OutputAttributes) {
    return this.httpService.post('/outputs', output);
  }
  update(output: OutputAttributes) {
    return this.httpService.put('/outputs', output.id, output);
  }
}
