import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthSandbox} from './auth.sandbox';

@Component({
  selector: 'app-auth',
  styleUrls: ['./auth.container.scss'],
  templateUrl: './auth.container.html'
})
export class AuthContainer implements OnInit{
  constructor(
    private activatedRoute: ActivatedRoute,
    private authSandbox: AuthSandbox,
    private route: Router
  ) {
    this.activatedRoute.params.subscribe(params => this.authSandbox.getUserDetails(params['token']));
    this.authSandbox.loggedUser$.subscribe(user => {
      this.route.navigate(['/projects']);
    });
  }
  ngOnInit(): void {
  }
}
