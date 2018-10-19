import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthContainer} from './auth/auth.container';

const routes: Routes = [
  {
    path: '', loadChildren: './shared/containers/container.module#ContainersModule'
  },
  {path: 'home/:token', component: AuthContainer}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
