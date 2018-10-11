import {
  Component,
  OnInit,
  Renderer2
} from "@angular/core";
import { PageTitleService } from "@vedacircle/core";

import { FormGroup } from "@angular/forms";

@Component({
  selector: "ngx-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {


  constructor(
    public _pageTitleService: PageTitleService,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    this._pageTitleService.title = "";

  }
}
