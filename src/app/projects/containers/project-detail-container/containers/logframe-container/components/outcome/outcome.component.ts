import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {OutcomeSandbox} from '../../../../../../sandbox/outcome.sandbox';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {TimePlan} from '../../../../../../../shared/models/time-plan';
import {FormComponent} from '../../models/form-component';
import {GenericValidator} from '../../../../../../../shared/validators/generic-validator';
import {OutcomeAttributes} from '../../../../../../../shared/models/model attributes/model-attributes';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html'
})
export class OutcomeComponent implements OnInit, OnDestroy, FormComponent {
  action: string;
  from: string;
  id: number;
  type: string;
  data: Object;
  parent_id: number;
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;
  displayMessage: { [key: string]: string } = {};
  project_id: number;
  message: string;
  error: string;
  componentActive = true;
  private outcomeForm = {
    type: ['', Validators.required],
    name: ['', Validators.required]
  };
  generalForm: FormGroup;
  timePlans$: Observable<TimePlan[]>;
  constructor(private outcomeSanbox: OutcomeSandbox, private fb: FormBuilder) {
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
    this.createForm(this.action);
    this.timePlans$ = this.outcomeSanbox.time_plans$;
    this.parent_id = this.from === 'project' ? 0 : this.id; // for new outcome
    this.parent_id = (this.action === 'edit' && this.from === 'outcome') ? this.data['attributes']['parent_id'] : this.parent_id;
    this.outcomeSanbox.currentSelectedId.pipe(
      takeWhile(() => this.componentActive)
    ).subscribe(id => this.project_id = id);
    this.outcomeSanbox.message.pipe(
      takeWhile(() => this.componentActive)
    ).subscribe((m: string) => this.message = (m !== null && m.startsWith('[Outcome]')) ? m.replace('[Outcome] ',  '') : '');
    this.outcomeSanbox.error$.pipe(
      takeWhile(() => this.componentActive)
    ).subscribe((err: string) => this.error = (err !== null && err.startsWith('[Outcome]')) ? err.replace('[Outcome] ',  '') : '');
  }
  createForm(action: string) {
      this.generalForm = this.fb.group(this.outcomeForm);
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
    const outcome: OutcomeAttributes = {
      id: this.action === 'edit' ? this.data['id'] : undefined,
      name: this.generalForm.get('name').value,
      type_id: this.generalForm.get('type').value,
      parent_id: this.parent_id,
      project_id: this.project_id
    };
    if (this.generalForm.valid) {
      this.action !== 'edit' ? this.outcomeSanbox.createOutcome(outcome) : this.outcomeSanbox.updateOutcome(outcome); }
  }
  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
