import {Compiler, Component, NgModule, NgModuleFactory, OnInit} from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {outcomeForm} from '../../constants/template';

@Component({
  selector: 'app-dialog',
  styleUrls: ['./dialog.component.scss'],
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {
  dynamicComponent;
  dynamicModule: NgModuleFactory<any>;
  text = outcomeForm;

  constructor(private compiler: Compiler) {
  }

  ngOnInit(): void {
    this.dynamicComponent = this.createNewComponent(this.text);
    this.dynamicModule = this.compiler.compileModuleSync(this.createComponentModule(this.dynamicComponent));
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
        FormsModule
      ],
      declarations: [componentType],
      entryComponents: [componentType]
    })
    class RuntimeComponentModule {
    }

    return RuntimeComponentModule;
  }

  protected createNewComponent(text: string) {
    const template = `${text}`;

    @Component({
      selector: 'app-dynamic-component',
      template: template,
      styleUrls: ['./dialog.component.scss']
    })
    class DynamicComponent implements OnInit {
      text: any;

      ngOnInit(): void {
        this.text = text;
      }
    }

    return DynamicComponent;
  }
}
