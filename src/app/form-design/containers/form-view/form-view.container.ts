import {
  Component,
  ComponentFactoryResolver,
  Input, OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {FormDirective} from '../../directives/form-directive';
import {TextInputComponent} from '../../components/form-elements/text-input/text-input.component';
import {Observable, of} from 'rxjs';
import {TextArea} from '../../components/form-elements/text-area/text-area';
import {FormDesignSandbox} from '../../sandbox/form-design.sandbox';
import {distinct, distinctUntilChanged, last, map, take, takeLast} from 'rxjs/operators';
import {Checkbox} from '../../components/form-elements/checkbox/checkbox';
import {RadioButton} from '../../components/form-elements/radio-button/radio-button';
import {DropDown} from '../../components/form-elements/drop-down/drop-down';
import {DateInput} from '../../components/form-elements/date-input/date-input';
import {FileInput} from '../../components/form-elements/file-input/file-input';
import {LocationInput} from '../../components/form-elements/location-input/location-input';
import {LinkInput} from '../../components/form-elements/link-input/link-input';
import {element} from 'protractor';
import {BaseElement} from '../../../shared/models/BaseElement';
import {FormAttributes} from '../../../shared/models/model attributes/model-attributes';

@Component({
  selector: 'form-view',
  templateUrl: './form-view.container.html',
  styles: ['::ng-deep .mat-form-field-flex{ background-color: #f5f5f5 !important; padding: 0 16px;}'],
})
export class FormViewContainer implements OnInit, OnDestroy {
  elements$ = this.formDesignSandbox.elements$;
  updated$ = this.formDesignSandbox.updated$;
  elements: Array<BaseElement>;
  @Input() element$: Observable<any>;
  @ViewChild(FormDirective) form: FormDirective;
  lastElement;
  editFormNameEnabled: boolean;
  formTitle: string;
  components = {
    text_input: TextInputComponent,
    text_area: TextArea,
    check_box: Checkbox,
    radio_button: RadioButton,
    drop_down: DropDown,
    date_range: DateInput,
    file: FileInput,
    location_input: LocationInput,
    insert_link: LinkInput
  };

  constructor(private resolver: ComponentFactoryResolver, private formDesignSandbox: FormDesignSandbox) {
  }

  ngOnInit() {
    this.formDesignSandbox.formName$.subscribe(name => this.formTitle = name); // Todo unsubscribe
    const viewRef = this.form.viewContainerRef;
    viewRef.clear();
    this.reDraw(viewRef);
    this.updated$.subscribe(val => {
      if (val) {
        this.reDraw(viewRef);
      } else {
        this.draw(viewRef); // when update is false
      }
    });
  }

  reDraw(viewRef) {
    this.elements$.pipe(distinct()).subscribe(res => {
      this.elements = res;
      viewRef.clear();
      for (const el in res) {
        if (res.length) {
          const componentRes = this.resolver.resolveComponentFactory(this.components[res[el]['type']]);
          const compRef = viewRef.createComponent(componentRes);
          this.setPropertiesToElements(compRef, res[el]);
        }
      }
    });
  }

  setPropertiesToElements(compRef, el: BaseElement) {
    compRef.changeDetectorRef.markForCheck();
    (<BaseElement>compRef.instance).placeholder = el.placeholder;
    (<BaseElement>compRef.instance).type = el.type;
    (<BaseElement>compRef.instance).id = el.id;
    if (el.type === 'radio_button' || el.type === 'drop_down') {
      (<BaseElement>compRef.instance).options = el.options;
    }
  }
  draw(viewRef) {
   // this.formDesignSandbox.updateToggle();
    this.elements$.subscribe(r => this.lastElement = r[r.length - 1]);
    this.element$.pipe(distinctUntilChanged()).subscribe(res => {
      console.log(this.lastElement, res);
      if (this.lastElement === undefined) {
        if (res.type) {
          const componentRes = this.resolver.resolveComponentFactory(this.components[res.type]);
          const compRef = viewRef.createComponent(componentRes);
          this.setPropertiesToElements(compRef, res);
        }
      } else {
        if (res.id !== this.lastElement.id) {
          const componentRes = this.resolver.resolveComponentFactory(this.components[res.type]);
          const compRef = viewRef.createComponent(componentRes);
          this.setPropertiesToElements(compRef, res);
        }
      }
    });
  }
  editForm() {
    this.editFormNameEnabled = true;
  }
  saveFormName() {
    this.editFormNameEnabled = false;
    this.formDesignSandbox.updateFormName(this.formTitle);
  }
  ngOnDestroy(): void {
   // this.formDesignSandbox.updateToggle();
  }
  discard() {
    this.elements$.subscribe(elements => {
      console.log(elements);
      if (elements.length === 0) { return; } else { console.log('are you sure you want to discard changes? '); }
    });
  }
  refresh() {
    this.ngOnInit();
  }
  publish() {
    this.elements$.subscribe(elements => {
      if (elements.length !== 0) {
        const newForm: FormAttributes = {
          form_name: this.formTitle,
          form_elements: elements,
          user_id: 1 // TODO
        };
        this.formDesignSandbox.createForm(newForm);
      }
    });
  }
}
