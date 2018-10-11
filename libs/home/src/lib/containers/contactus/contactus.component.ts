import { Component, OnInit, Renderer2 } from "@angular/core";

import "rxjs/add/observable/fromEvent";

@Component({
  selector: "ngx-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.scss"]
})
export class ContactusComponent implements OnInit {


  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

  }

}
