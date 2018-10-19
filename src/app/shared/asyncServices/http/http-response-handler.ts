import {Injectable} from '@angular/core';
import {ConfigService} from '../../../app-config.service';
import {NotificationService} from './notification.service';
import {Observable} from 'rxjs';

@Injectable()
export class HttpResponseHandler {
  constructor(
    private configService: ConfigService,
    private notificationService: NotificationService) {}
  /**
   * Global error handler
   */
  public onCatch(response: any): Observable<any> {
    switch (response.status) {
      case 400:
        this.handleBadRequest(response);
        break;
      case 401:
        this.handleUnauthorized(response);
        break;
      case 403:
        this.handleForbidden();
        break;
      case 404:
        this.handleNotFound();
        break;
      case 500:
        this.handleServerError();
        break;
      default:
        break;
    }
    return Observable.throw(response);
  }

  private handleBadRequest(responseBody: any): void {
    if (responseBody._body) {
      try {
        this.handleErrorMessages(responseBody);
      } catch (error) {
        this.handleServerError();
      }
    } else {
      this.handleServerError();
    }
  }

  private handleUnauthorized(responseBody: any): void {
    this.showNotificationError(responseBody);
  }

  private handleForbidden(): void {
    this.showNotificationError('say something here'); // Todo create list of error message in separate file
  }

  private handleNotFound(): void {
    this.showNotificationError('say something here');
  }

  private handleServerError() {
    this.showNotificationError('say something here');
  }

  private handleErrorMessages(response: any) {
    if (!response) {
      return;
    }
    this.showNotificationError(response); // Todo get the message from response object don't leave it like this
  }

  private showNotificationError(message: string) {
    this.notificationService.error(message);
  }

}
