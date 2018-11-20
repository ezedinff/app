import {Compiler, Component, ComponentFactoryResolver, Inject, NgModule, NgModuleFactory, OnInit, ViewChild} from '@angular/core';
import {
  MAT_DIALOG_DATA,
} from '@angular/material';
import {LogframeFormBuilderService} from '../../services/logframe-form-builder.service';
import {DynamicDirective} from '../../directives/dynamic.directive';
import {OutcomeComponent} from '../outcome/outcome.component';
import {FormComponent} from '../../models/form-component';

@Component({
  selector: 'app-dialog',
  styleUrls: ['./dialog.component.scss'],
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {
  @ViewChild(DynamicDirective) dynamic: DynamicDirective;
  title: string;
  constructor(private compiler: Compiler,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private logframeFormBuilderService: LogframeFormBuilderService,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.title = this.logframeFormBuilderService.getTitle(this.data['type'], this.data['action']);
    this.loadComponent(this.logframeFormBuilderService.getModel(this.data['type']));
  }
  loadComponent(component) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.dynamic.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<FormComponent>componentRef.instance).id = this.data['id'];
    (<FormComponent>componentRef.instance).action = this.data['action'];
    (<FormComponent>componentRef.instance).type = this.data['type'];
    (<FormComponent>componentRef.instance).from = this.data['from'];
    (<FormComponent>componentRef.instance).data = this.data['data'];
  }
}
