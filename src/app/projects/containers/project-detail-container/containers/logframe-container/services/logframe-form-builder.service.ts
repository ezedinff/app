import {Injectable} from '@angular/core';
import {Outcome} from '../models/Outcome';
import {FormBuilder} from '@angular/forms';
import {Component} from '@angular/core/src/metadata/directives';
import {OutcomeComponent} from '../components/outcome/outcome.component';
import {OutputComponent} from '../components/output/output.component';
import {FormComponent} from '../models/form-component';

@Injectable()
export class LogframeFormBuilderService {
  constructor(private formBuilder: FormBuilder,
             ) {}
  getTitle(type: string, action: string) {
    switch (action) {
      case 'add':
        return `${action} new ${type}`;
      default:
        return `${action} ${type}`;
    }
  }
  getModel(type: string) {
    switch (type) {
      case 'outcome':
        return OutcomeComponent;
      case 'output':
        return OutputComponent;
    }
  }

}
