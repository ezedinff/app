import {Injectable} from '@angular/core';
import {HttpService} from '../shared/asyncServices/http/index';

@Injectable()
export class AuthService {

  constructor(private httpService: HttpService) {
  }
  getUserDetails(token: string) {
    return this.httpService.get('/auth/me');
  }
}
