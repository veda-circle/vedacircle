import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";

import "rxjs/add/observable/fromEvent";

@Component({
  selector: "ngx-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"]
})
export class EventsComponent implements OnInit{


  @ViewChild("calEvents") calEvents: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

    this.renderer.listen("window", "scroll", (event) => {
      const number = window.scrollY;
      if (number > 2300 && number < 2800) {
        this.renderer.setAttribute(this.calEvents.nativeElement, "data-vc-scrollspy", "{cls:'vc-active'}");
      }

    });

  }

}
