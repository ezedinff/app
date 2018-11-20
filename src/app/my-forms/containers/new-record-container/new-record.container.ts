import {Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {GenerateFormDirective} from '../../directives/generate-form.directive';
import {GenerateFormComponent} from '../../components/generate-form/generate-form';
import {GenerateForm} from '../../interfaces/generate-form';
import {SingleRecordFormService} from '../../services/single-record-form.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Form} from '../../../shared/models/form';
import {MyFormSandbox} from '../../sandbox/my-form.sandbox';
import {Observable} from 'rxjs';
import {MultipleRecordFormService} from '../../services/multiple-record-form.service';

@Component({
  selector: 'new-record-container',
  template: '<div fxLayout="row" class="container-fluid" style="padding-top: 16px;">' +
    '  <mat-toolbar color="primary" *ngIf="form$ | async as form">' +
    '    <h1 class="mat-headline center-align">{{form?.attributes?.form_name}}</h1>' +
    '</mat-toolbar>' +
    '</div>' +
    '<div fxLayout="row" class="container-fluid" style="padding-top: 16px;">' +
    '  <mat-toolbar>\n' +
    '    <h1 class="mat-headline center-align" *ngIf="!isMulti">Single Record</h1>' +
    '    <h1 class="mat-headline center-align" *ngIf="isMulti">Multiple Record</h1>' +
    '    <div fxFlex fxLayoutAlign="end">' +
    '      <span style="font-size: 0.7em !important;">Single&nbsp;</span>' +
    '      <mat-slide-toggle fxHide.xs color="primary" name="isMulti" (toggleChange)="toggleMulti($event)"></mat-slide-toggle>' +
    '      <span style="font-size: 0.7em !important;">&nbsp;Multiple</span>' +
    '    </div>' +
    '  </mat-toolbar>\n' +
    '</div>' +
    '<div fxLayout="row" class="container-fluid">' +
    '<mat-card fxFlex class="container-fluid" style="margin-bottom: 20%;">' +
    '<ng-container generateForm></ng-container>' +
    '</mat-card>' +
    '</div>'
})
export class NewRecordContainer implements OnInit {
  isMulti: boolean;
  form$: Observable<any>;
  title = '';
  @ViewChild(GenerateFormDirective) generateForm: GenerateFormDirective;
  viewRef;
  constructor(private resolver: ComponentFactoryResolver,
              private singleFormGenerator: SingleRecordFormService,
              private multipleFormGenerator: MultipleRecordFormService,
              private activatedRoute: ActivatedRoute,
              private myFormSandbox: MyFormSandbox,
              private router: Router) {
    this.activatedRoute.params.subscribe(params => this.myFormSandbox.setSelectedFormId(+params['id']));
    this.form$ = this.myFormSandbox.form$;
  }
  toggleMulti() {
    this.isMulti = !this.isMulti;
    this.title = this.isMulti ? 'Multiple Record' : 'Single Record';
    this.form$.subscribe(form => {
      if (this.isMulti) {
        this.drawComponent(this.viewRef, this.multipleFormGenerator.generateTemplate(form));
      } else {
        this.drawComponent(this.viewRef, this.singleFormGenerator.generateTemplate(form));
      }
    });
  }
  drawComponent(viewRef: ViewContainerRef, template) {
    viewRef.clear();
    const componentResolver = this.resolver.resolveComponentFactory(GenerateFormComponent);
    const compRef = viewRef.createComponent(componentResolver);
    (<GenerateForm>compRef.instance).template = template;
  }

  ngOnInit(): void {
    this.viewRef = this.generateForm.viewContainerRef;
    this.form$.subscribe(form => {
      if (form.id) {
        this.drawComponent(this.viewRef, this.singleFormGenerator.generateTemplate(form));
      } else {
        this.router.navigate(['/my-forms']);
      }
    });
  }
}
