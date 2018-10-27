import {Model} from '../../../../../../shared/models/model';
import {FormGroup} from '@angular/forms';

export class Outcome implements Model {
  api_route = '/outcomes';

  createForm(): FormGroup {
    return undefined;
  }

  delete(id: number): boolean {
    return false;
  }

  editForm(): FormGroup {
    return undefined;
  }

  getAll(): Array<Object> {
    return undefined;
  }

  getById(id: number): Object {
    return undefined;
  }

  saveData(): boolean {
    return false;
  }
}
