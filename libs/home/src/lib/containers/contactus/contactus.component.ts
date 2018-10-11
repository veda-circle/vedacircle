import { Component, OnInit, Renderer2 } from "@angular/core";

import "rxjs/add/observable/fromEvent";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "ngx-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.scss"]
})
export class ContactusComponent implements OnInit {


  paypalForm: FormGroup;


  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

  }

}
