import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";

import "rxjs/add/observable/fromEvent";

@Component({
  selector: "ngx-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {


  @ViewChild("about") about: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

    this.renderer.listen("window", "scroll", (event) => {
      const number = window.scrollY;
      if (number > 300 && number < 800) {
        this.renderer.setAttribute(this.about.nativeElement, "data-vc-scrollspy", "{cls:'vc-active'}");
      }

    });

  }

}
