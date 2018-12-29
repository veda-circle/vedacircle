import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { Store } from "@ngxs/store";

@Component({
  selector: "ngx-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
}) /**/
export class LandingComponent {

  @ViewChild("newsheader") newsheader: ElementRef;
  @ViewChild("titleBar") titleBar: ElementRef;


  constructor(private store: Store, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.renderer.listen("window", "scroll", event => {
      const number = window.scrollY;
      this.newsheader.nativeElement.style.display = "none";
      /*if (number > 150 || window.pageYOffset > 150) {
        this.newsheader.nativeElement.style.display = "none";
      }
      if (number <= 5) {
        this.newsheader.nativeElement.style.display = "block";
        this.titleBar.nativeElement.style.display = "none";
        this.titleBar.nativeElement.classList.add("vc-hidden-large");
        this.titleBar.nativeElement.classList.remove("vc-visible-large");
      }*/
    });

  }

  closeNewsHeader() {
    this.newsheader.nativeElement.style.display = "none";
    this.titleBar.nativeElement.style.display = "block";
    this.titleBar.nativeElement.classList.remove("vc-hidden-large");
    this.titleBar.nativeElement.classList.add("vc-visible-large");
  }


}
