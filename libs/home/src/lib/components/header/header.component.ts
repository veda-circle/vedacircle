import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Login, Logout } from '@ngx-starter-kit/auth';
import { AuthState } from '@ngx-starter-kit/auth';

@Component({
  selector: 'ngx-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Select(AuthState.isLoggedIn) isLoggedIn$: Observable<boolean>;
  @ViewChild('navbar') navbar: ElementRef;

  navigation = [
    { link: 'about', label: 'About' },
    { link: 'blog', label: 'Blog' },
    { link: 'features', label: 'Features' },
  ];

  constructor(private store: Store, private renderer: Renderer2) {
  }

  ngOnInit() {

    this.renderer.listen('window', 'scroll', (event) => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
        this.navbar.nativeElement.classList.add('active');
      } else {
        this.navbar.nativeElement.classList.remove('active');
      }
    });
  }

  public login() {
    this.store.dispatch(new Login());
  }

  public logout() {
    this.store.dispatch(new Logout());
  }

  public signup() {
  }
}
