import {SelectOption} from '../../shared/models/BaseElement';
import {Form} from '../../shared/models/form';

export interface FormGenerator {
  generateTemplate(form: Form);
}
