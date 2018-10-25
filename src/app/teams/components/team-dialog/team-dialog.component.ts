import {Compiler, Component, Inject, NgModule, NgModuleFactory} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@Component({
  selector: 'app-team-dialog',
  styleUrls: ['./team-dialog.component.scss'],
  templateUrl: './team-dialog.component.html'
})
export class TeamDialogComponent {
  dynamicComponent;
  dynamicModule: NgModuleFactory<any>;
  title = 'this is title';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private compiler: Compiler) {
    this.dynamicComponent = this.createDynamicComponent(this.title);
    this.dynamicModule = this.compiler.compileModuleSync(this.createDynamicModule(this.dynamicComponent));
  }
  private createDynamicModule(componentType: any) {
    @NgModule({
      imports: [
        MatCardModule,
        MatDialogModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule
      ],
      declarations: [componentType],
      entryComponents: [componentType]
    })
    class DynamicModule {}
    return DynamicModule;
  }
  private createDynamicComponent(templateText: string) {
    const template = templateText;
    @Component({
      selector: 'app-team-dynamic-component',
      template: template,
      styleUrls: ['./team-dialog.component.scss']
    })
    class DynamicComponent {}
    return DynamicComponent;
  }
}
