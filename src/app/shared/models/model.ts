import {FormGroup} from '@angular/forms';

export interface Model {
  api_route: string;
  createForm(): FormGroup;
  editForm(): FormGroup;
  saveData(form: FormGroup): boolean;
  getAll(): Array<Object>;
  getById(id: number): Object;
  delete(id: number): boolean;
  getTemplate(): string;
}
