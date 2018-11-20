import {Compiler, Component, Inject, NgModule, NgModuleFactory, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatCheckboxModule, MatDialogRef,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {formElementsEditForms} from '../../constants/template';
import {BaseElement, SelectOption} from '../../../shared/models/BaseElement';
import {FormDesignSandbox} from '../../sandbox/form-design.sandbox';

@Component({
  selector: 'element-edit-dialog',
  template: '<mat-toolbar color="primary" class="mat-elevation-z4">' +
    '<span style="text-transform: capitalize;">{{data["title"]}}</span>' +
 '<span class="spacer"></span>' +
    '<button  mat-icon-button mat-dialog-close ' +
    'style="float: right !important; position: relative; cursor: pointer;">' +
    '<mat-icon > close</mat-icon></button>' +
    '</mat-toolbar><perfect-scrollbar>' +
    '  <ng-container class="dialog-container">' +
    '    <ng-container *ngComponentOutlet="dynamicComponent; ngModuleFactory: dynamicModule"></ng-container>' +
    '  </ng-container>' +
    '</perfect-scrollbar>',
  styles: ['::ng-deep .mat-dialog-container{ padding: 0 0 5em; overflow: hidden;}']
})
export class ElementEditDialog implements OnInit, OnDestroy {
  dynamicComponent;
  dynamicModule: NgModuleFactory<any>;
  @ViewChild('form') form;
  compActive = true;
  constructor (private compiler: Compiler,
               @Inject(MAT_DIALOG_DATA) public data: any,
               public dialogRef: MatDialogRef<ElementEditDialog>,
               private formDesignSandbox: FormDesignSandbox) {}
  ngOnInit(): void {
    this.formDesignSandbox.element$.subscribe(element => {
      this.dynamicComponent = this.createComponent(formElementsEditForms[this.data['type']], this.dialogRef, element);
      this.dynamicModule = this.compiler.compileModuleSync(this.createModule(this.dynamicComponent));
    });
    console.log(this.form);
  }
  protected createModule(component) {
    @NgModule({
      declarations: [component],
      entryComponents: [component],
      imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatCheckboxModule
      ]
    })
    class DynamicModule {}
    return DynamicModule;
  }
  protected createComponent(content: string, dialogRef, element: BaseElement) {
    const temp = content;
    @Component({
      selector: 'dynamic',
      template: temp
    })
    class DynamicComponent implements OnInit {
      dialog = dialogRef;
      description: string;
      id: number;
      name: string;
      options: SelectOption[];
      placeholder: string;
      required: boolean;
      type: string;
      validation: string;
      constructor(private formDesignSandbox: FormDesignSandbox) {}
      submit() {
        const updateResult: BaseElement = {
          id: this.id,
          name: this.name,
          placeholder: this.placeholder,
          required: this.required,
          type: this.type,
          validation: this.validation,
          description: this.description,
          options: this.options
        };
        this.formDesignSandbox.updateElement(updateResult);
       // localStorage.setItem('inputConfig', JSON.stringify(form.value));
      }

      ngOnInit(): void {
        this.id = element.id;
        this.placeholder = element.placeholder;
        this.required = element.required;
        this.type = element.type;
        this.description = element.description;
        this.validation = element.validation;
        this.options = element.options;
      }
      addMore() {
        Object.assign(this.options, this.options.push({label: 'radio button 1', value: 'value'}));
      }
    }
    return DynamicComponent;
  }

  ngOnDestroy(): void {
  }
}
