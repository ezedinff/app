import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EzTableComponent} from './ez-table.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollY: true,
  useBothWheelAxes: true
};
@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatToolbarModule, MatTooltipModule, PerfectScrollbarModule, MatButtonModule, MatIconModule],
  declarations: [EzTableComponent],
  exports: [EzTableComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class EzTableModule {}
