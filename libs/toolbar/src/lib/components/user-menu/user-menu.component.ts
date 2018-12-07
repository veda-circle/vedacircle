import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'ngx-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent implements OnInit {
  isOpen: boolean;
  @Input()
  currentUser = null;

  constructor(private store: Store) {}

  ngOnInit() {
    if (this.currentUser.given_name && this.currentUser.given_name === 'Sumanth') {
      this.currentUser.photoURL = 'assets/img/avatars/user-image.jpg';
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

}
