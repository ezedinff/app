import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormDesignSandbox} from '../../sandbox/form-design.sandbox';
import {BehaviorSubject} from 'rxjs';
import {BaseElement} from '../../../shared/models/BaseElement';

@Component({
  selector: 'form-design',
  templateUrl: './form-design.container.html',
  styles: ['form-building-block {border: 1px solid #b6b6b6; background-color: #EEEEEE; height: 443px;}',
    'form-view{border: 1px solid #b6b6b6; background-color: white; min-height: 100vh; margin-bottom: 20%;}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormDesignContainer implements OnInit {
  elements$ = this.formDesignSandbox.elements$;
  newElement = new BehaviorSubject({});
  newElement$ = this.newElement.asObservable();
  constructor(private formDesignSandbox: FormDesignSandbox) {}
  getElementSelected(type: string) {
    const newEl = this.initializeNewElement(type);
    this.newElement.next(newEl);
    this.formDesignSandbox.createNewElement(newEl);
  }
  deleteElement(id: number) {
    this.formDesignSandbox.deleteElement(id);
  }
  initializeNewElement(type): BaseElement {
    if (type === 'radio_button' || type === 'drop_down') {
      const optionLable = type === 'radio_button' ? 'radio button 1' : 'Option 1';
      return {
        id: new Date().getTime(),
        type: type,
        placeholder: type,
        required: false,
        options: [{label: optionLable, value: 'value'}]
      };
    } else {
      return {
        id: new Date().getTime(),
        type: type,
        placeholder: type,
        required: false
      };
    }
  }

  ngOnInit(): void {
  }
}
