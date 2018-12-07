import { Component, OnInit } from '@angular/core';
import { Crumb } from '@vedacircle/breadcrumbs';
import { Store } from '@ngxs/store';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  crumbs: ReadonlyArray<Crumb> = [{ name: 'Dashboard', link: '/dashboard' }, { name: 'Profile' }];
  profile: any;
  constructor(private store: Store) {}

  ngOnInit() {
  }
}
