import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthContainer} from './auth.container';
import {AuthSandbox} from './auth.sandbox';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthContainer],
  providers: [AuthSandbox, AuthService]
})
export class AuthModule {}
