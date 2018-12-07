import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceWorkerService } from '@vedacircle/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor(private sw: ServiceWorkerService, public meta: Meta) {
    meta.addTags([
      { charset: 'UTF-8' },
      { name: 'description', content: 'NGX Starter Kit' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'TypeScript, Angular' },
    ]);
  }

  ngOnInit() {
    // Check service worker update
    this.sw.checkSWUpdate();
  }
}
