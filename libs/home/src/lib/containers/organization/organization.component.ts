import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";

import "rxjs/add/observable/fromEvent";

@Component({
  selector: "ngx-org",
  templateUrl: "./organization.component.html",
  styleUrls: ["./organization.component.scss"]
})
export class OrganizationComponent implements OnInit {

  @ViewChild("org") org: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

    this.renderer.listen("window", "scroll", (event) => {
      const number = window.scrollY;
      if (number > 3000 && number < 4000) {
        this.renderer.setAttribute(this.org.nativeElement, 'data-vc-scrollspy', "{cls:'vc-active'}");
      }

    });

  }

}
