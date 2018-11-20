import {Model} from '../../../../../../shared/models/model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {outcomeFormTemplate} from '../constants/template';
export class Outcome implements Model {
  api_route = '/outcomes';
  private outcomeForm = {
    type: ['', Validators.required],
    name: ['', Validators.required]
  };
  constructor(private formBuilder: FormBuilder, private id: number) {}
  createForm(): FormGroup {
    return this.formBuilder.group(this.outcomeForm);
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

  saveData(form: FormGroup): boolean {
    return false;
  }
  getTemplate() {
    return outcomeFormTemplate;
  }
}
