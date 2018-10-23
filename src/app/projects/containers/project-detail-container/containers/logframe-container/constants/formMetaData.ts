import {Validators} from '@angular/forms';

const projectForm = {
  title: ''
};
const outcomeForm = {
  type: ['', Validators.required],
  name: ['', Validators.required]
};
const outputForm = {
  type: ['', Validators.required],
  name: ['', Validators.required]
};
const indicatorForm = {
  name: '',
  type: '',
  baseline: '',
  start: '',
  target: '',
  end: '',
  unit: '',
  frequency: '',
  source: '',
  disaggregation: '',
  disgby: '',
  totalauto: '',
  customformneeded: '',
  customform: ''
};
const activityForm = {
  title: ''
};
const milestoneForm = {
  title: ''
};

export const forms = {
  project_form: projectForm,
  outcome_form: outcomeForm,
  output_form: outputForm,
  indicator_form: indicatorForm,
  activity_form: activityForm,
  milestone_form: milestoneForm
};
