import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { Login, Logout } from "@vedacircle/auth";
import { AuthState } from "@vedacircle/auth";

@Component({
  selector: "ngx-home-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Select(AuthState.isLoggedIn) isLoggedIn$: Observable<boolean>;
  @ViewChild("navbar") navbar: ElementRef;
  @ViewChild("mobileNav") mobileNav: ElementRef;

  mobileInitVal = false;

  navigation = [
    { link: "about", label: "About" },
    { link: "blog", label: "Blog" },
    { link: "features", label: "Features" }
  ];

  constructor(private store: Store, private renderer: Renderer2) {
  }

  ngOnInit() {

    this.renderer.listen("window", "scroll", (event) => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
        this.navbar.nativeElement.classList.add("active");
      } else {
        this.navbar.nativeElement.classList.remove("active");
      }
    });
  }

  toggleMobileNav() {
    this.mobileInitVal = !this.mobileInitVal;
    if (this.mobileInitVal) {
      this.mobileNav.nativeElement.style.display = "block";
      this.renderer.setAttribute(this.mobileNav.nativeElement, 'data-vc-scrollspy', "{cls:'vc-active'}");
    } else {
      this.mobileNav.nativeElement.style.display = "none";
      this.renderer.setAttribute(this.mobileNav.nativeElement, 'data-vc-scrollspy', "{cls:''}");
    }
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
