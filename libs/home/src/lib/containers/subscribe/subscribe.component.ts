import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";

import "rxjs/add/observable/fromEvent";

@Component({
  selector: "ngx-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.scss"]
})
export class SubscribeComponent implements OnInit {


  @ViewChild("subscribe") subscribe: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

    this.renderer.listen("window", "scroll", (event) => {
      const number = window.scrollY;
      if (number > 4000 && number < 5000) {
        this.renderer.setAttribute(this.subscribe.nativeElement, "data-vc-scrollspy", "{cls:'vc-active'}");
      }

    });

  }

}
