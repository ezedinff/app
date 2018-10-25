import {NgModule} from '@angular/core';
import {ExpenditureTreeComponent} from './components/expenditure-tree/expenditure-tree.component';
import {ExpenditureWrapperContainer} from './containers/expenditure-wrapper/expenditure-wrapper.container';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {FinancePlanContainer} from './containers/finance-plan/finance-plan.container';
import {FinancePlanComponent} from './components/finance-plan-component/finance-plan.component';
import {ExpenditureTreeElementComponent} from './components/expenditure-tree-element/expenditure-tree-element.component';
const COMPONENT = [
  ExpenditureTreeComponent,
  ExpenditureWrapperContainer,
  ExpenditureTreeElementComponent,
  FinancePlanContainer,
  FinancePlanComponent
];
const routes: Routes = [
  {path: '', component: FinancePlanContainer},
  {path: 'list', component: ExpenditureWrapperContainer}
];
@NgModule({
  declarations: COMPONENT,
  exports: [COMPONENT, RouterModule],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forChild(routes)
  ]
})
export class ExpenditureModule {}
