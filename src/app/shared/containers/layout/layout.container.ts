import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {ActivatedRoute, Router} from '@angular/router';
import {LayoutSandbox} from './layout.sandbox';
import {User} from '../../models/User';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.container.scss'],
  templateUrl: './layout.container.html'
})
export class LayoutContainer implements OnInit {
  // public userImage = '';
  sideNavOpened = true;
  matDrawerOpened = false;
  matDrawerShow = true;
  sideNavMode = 'side';
  user$: Observable<User>;
  constructor(private media: ObservableMedia, private layoutSandbox: LayoutSandbox, private route: Router) {
    this.media.subscribe((mediaCahnge: MediaChange) => this.toggleView());
    this.user$ = this.layoutSandbox.loggedUser$;
  }
  toggleView() {
    if (this.media.isActive('gt-md')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
      this.matDrawerOpened = false;
      this.matDrawerShow = true;
    } else if (this.media.isActive('gt-xs')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = false;
      this.matDrawerOpened = true;
      this.matDrawerShow = true;
    } else if (this.media.isActive('lt-sm')) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;
      this.matDrawerOpened = false;
      this.matDrawerShow = false;
    }
  }

  ngOnInit(): void {
  }
}
