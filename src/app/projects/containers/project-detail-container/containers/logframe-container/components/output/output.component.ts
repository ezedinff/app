import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {TimePlan} from '../../../../../../../shared/models/time-plan';
import {FormComponent} from '../../models/form-component';
import {GenericValidator} from '../../../../../../../shared/validators/generic-validator';
import {OutputSanbox} from '../../../../../../sandbox/output.sanbox';
import {OutputAttributes} from '../../../../../../../shared/models/model attributes/model-attributes';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html'
})
export class OutputComponent implements OnInit, OnDestroy, FormComponent {
  action: string;
  from: string;
  id: number;
  data: Object;
  parent_id: number;
  type: string;
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  displayMessage: { [key: string]: string } = {};
  project_id: number;
  message: string;
  error: string;
  componentActive = true;
  private outputForm = {
    type: ['', Validators.required],
    name: ['', Validators.required]
  };
  generalForm: FormGroup;
  timePlans$: Observable<TimePlan[]>;
  constructor(private outputSanbox: OutputSanbox, private fb: FormBuilder) {
    this.validationMessages = {
      type: {
        required: 'Outcome type is required.'
      },
      name: {
        required: 'Oucome title is required.'
      }
    };
    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    console.log(this.data);
    this.createForm(this.action);
    this.timePlans$ = this.outputSanbox.time_plans$;
    this.parent_id = this.from === 'outcome' ? 0 : this.id; // for new output
    this.parent_id = (this.action === 'edit' && this.from === 'output') ? this.data['attributes']['parent_id'] : this.parent_id;
  }
  createForm(action: string) {
    this.generalForm = this.fb.group(this.outputForm);
    if (action === 'edit') {
      this.generalForm.patchValue({
        type: this.data['attributes']['type_id'],
        name: this.data['attributes']['name']
      });
    }
    // Watch for value changes
    this.generalForm.valueChanges.subscribe(
      value => this.displayMessage = this.genericValidator.processMessages(this.generalForm)
    );
  }
  submit() {
    const output: OutputAttributes = {
      id: this.action === 'edit' ? this.data['id'] : undefined,
      name: this.generalForm.get('name').value,
      type_id: this.generalForm.get('type').value,
      parent_id: this.parent_id,
      outcome_id: this.data['attributes']['outcome_id'] ? this.data['attributes']['outcome_id'] : this.data['id']
    };
    console.log('hello');
    if (this.generalForm.valid) {
      this.action !== 'edit' ? this.outputSanbox.createOutput(output) : this.outputSanbox.updateOutput(output); }
  }
  ngOnDestroy(): void {
  }


}
