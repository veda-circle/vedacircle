import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'ngx-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('header', null) header: ElementRef;
  @ViewChild("mobileNav", null) mobileNav: ElementRef;
  mobileInitVal = true;
  menus = [
    { link: '#banner', label: 'Home', active: 'active', routerLink: '/home' },
    { link: '#about', label: 'About', active: '', routerLink: '/home' },
    { link: '#events', label: 'Our Activities', active: '', routerLink: '/home' },
    { link: '#gallery', label: 'Gallery', active: '', routerLink: '/home' },
    { link: '#about', label: 'Organization', active: '', routerLink: '/home' },
    { link: '#regular-events', label: 'Charity', active: '', routerLink: '/home' },
    { link: '#donate', label: 'Donate', active: '', routerLink: '/home' },
  ];

  constructor(private store: Store, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.listen('window', 'scroll', event => {
      const number = window.scrollY;

      if (number > 600) {
        // add logic
        this.header.nativeElement.classList.remove('alt');
        this.header.nativeElement.classList.add('navbar-background');
      } else {
        // remove logic
        this.header.nativeElement.classList.remove('navbar-background');
        this.header.nativeElement.classList.add('alt');
      }
    });

  }
  toggleMobileNav() {
    this.mobileInitVal = !this.mobileInitVal;
    if (this.mobileInitVal) {
      this.mobileNav.nativeElement.style.display = "block";
      this.renderer.setAttribute(this.mobileNav.nativeElement, "data-vc-scrollspy", "{cls:'vc-active'}");
    } else {
      this.mobileNav.nativeElement.style.display = "none";
      this.renderer.setAttribute(this.mobileNav.nativeElement, "data-vc-scrollspy", "{cls:''}");
    }
  }
}
