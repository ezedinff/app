import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user-menu',
  styleUrls: ['./user-menu-component.scss'],
  templateUrl: './user-menu-component.html'
})
export class UserMenuComponent implements OnInit {
  @Input() currentUser = null;
  isOpen = false;
  @Input() user: User;
  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) { return; }
    const clickedInsde = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInsde) { this.isOpen = false; }
  }
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
  }
}
