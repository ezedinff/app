import {Compiler, Component, Input, NgModule, NgModuleFactory, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenerateForm} from '../../interfaces/generate-form';
import {
  MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {EzTableModule} from '../../../shared/components/ez-table/ez-table.module';

@Component({
  selector: 'generate-form',
  template: '<ng-container *ngComponentOutlet="dynamicComponent; ngModuleFactory: dynamicModule"></ng-container>',
  styles: ['::ng-deep .mat-form-field-flex{ background-color: #f5f5f5; padding: 0 16px; }']
})
export class GenerateFormComponent implements OnInit, GenerateForm {
  template;
  dynamicComponent;
  dynamicModule: NgModuleFactory<any>;
  constructor(private compiler: Compiler) {}
  protected createDynamicModule(component) {
    @NgModule({
      declarations: [component],
      entryComponents: [component],
      imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatDatepickerModule,
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
        FormsModule,
        EzTableModule
      ]
    })
    class DynamicModule {}
    return DynamicModule;
  }
  protected createDynamicComponent(templateValue: string) {
    @Component({
      selector: 'app-dynamic',
      template: templateValue,
      styleUrls: ['./generate-form.scss']
    })
    class DynamicComponent implements OnInit {
      submit(form) {
        console.log(form);
      }

      ngOnInit(): void {
        const el = document.getElementsByClassName('radio_placeholder');
        console.log(el);
      }
    }
    return DynamicComponent;
  }

  ngOnInit(): void {
    this.dynamicComponent = this.createDynamicComponent(this.template);
    this.dynamicModule = this.compiler.compileModuleSync(this.createDynamicModule(this.dynamicComponent));
  }
}
