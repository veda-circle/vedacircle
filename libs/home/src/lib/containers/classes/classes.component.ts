import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";

import "rxjs/add/observable/fromEvent";

export interface ClassesElement {
  name: string;
  day: string;
  time: string;
  audio: string;
}

const ELEMENT_DATA: ClassesElement[] = [
  {
    day: "Monday",
    name: "Shloka Class",
    time: "07:30 PM - 09:00 PM",
    audio: ""
  },
  {
    day: "Tuesday",
    name: "Shloka Class",
    time: "07:30 PM - 09:00 PM",
    audio: ""
  },
  {
    day: "Wednesday",
    name: "Veda Class",
    time: "07:30 PM - 09:00 PM",
    audio: ""
  },
  {
    day: "Thursday",
    name: "Veda Class(Irvine)",
    time: "07:30 PM - 09:00 PM",
    audio: ""
  },
  { day: "Friday", name: "Veda Class", time: "07:30 PM - 09:00 PM", audio: "" },
  {
    day: "Saturday",
    name: "Kids Veda Class",
    time: "04:30 PM - 06:00 PM",
    audio: ""
  },
  { day: "Sunday", name: "Veda Class", time: "04:30 PM - 06:00 PM", audio: "" }
];

@Component({
  selector: "ngx-classes",
  templateUrl: "./classes.component.html",
  styleUrls: ["./classes.component.scss"]
})
export class ClassesComponent implements OnInit {


  @ViewChild("classes") classes: ElementRef;

  displayedColumns: string[] = ["name", "day", "time", "audio"];
  dataSource = ELEMENT_DATA;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

    this.renderer.listen("window", "scroll", (event) => {
      const number = window.scrollY;
      if (number > 5000 && number < 6000) {
        this.renderer.setAttribute(this.classes.nativeElement, "data-vc-scrollspy", "{cls:'vc-active'}");
      }

    });

  }

}
