import {Compiler, Component, Inject, NgModule, NgModuleFactory, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {indicatorForm, outcomeForm, outputForm} from '../../constants/template';
import {forms} from '../../constants/formMetaData';

@Component({
  selector: 'app-dialog',
  styleUrls: ['./dialog.component.scss'],
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {
  dynamicComponent;
  dynamicModule: NgModuleFactory<any>;
  title: string;
  constructor(private compiler: Compiler,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.title = this.getTitle(this.data['type'], this.data['action']);
    this.dynamicComponent = this.createNewComponent(this.getTemplate(this.data['type']), this.data);
    this.dynamicModule = this.compiler.compileModuleSync(this.createComponentModule(this.dynamicComponent));
  }
  getTemplate(type: string) {
    switch (type) {
      case 'outcome':
        return outcomeForm;
      case 'output':
        return outputForm;
      case 'indicator':
        return indicatorForm;
      default:
        return type;
    }
  }
  getTitle(type: string, action: string) {
    switch (action) {
      case 'add':
        return `${action} new ${type}`;
      default:
        return `${action} ${type}`;
    }
  }
  protected createComponentModule(componentType: any) {
    @NgModule({
      imports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatNativeDateModule
      ],
      declarations: [componentType],
      entryComponents: [componentType]
    })
    class RuntimeComponentModule {
    }

    return RuntimeComponentModule;
  }

  protected createNewComponent(text: string, data: any) {
    const template = `${text}`;

    @Component({
      selector: 'app-dynamic-component',
      template: template,
      styleUrls: ['./dialog.component.scss']
    })
    class DynamicComponent implements OnInit {
      text: any;
      data: any;
      generalForm: FormGroup;
      constructor(private formBuilder: FormBuilder) {}
      ngOnInit(): void {
        this.text = text;
        this.data = data;
        this.createForm(forms[`${data['type']}_form`]);
      }
      createForm(constrols) {
        this.generalForm = this.formBuilder.group(constrols);
      }
      submit() {
        console.log(this.generalForm);
      }
    }

    return DynamicComponent;
  }
}
