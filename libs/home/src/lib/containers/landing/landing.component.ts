import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { Store } from "@ngxs/store";
import {SlideData} from '../events/event.component';
import {OwlOptions} from 'ngx-owl-carousel-o';


@Component({
  selector: "ngx-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
}) /**/
export class LandingComponent {

  @ViewChild("newsheader", null) newsheader: ElementRef;
  @ViewChild("titleBar", null) titleBar: ElementRef;

  slide: SlideData[] = [
    {
      text: '',
      src: 'assets/img/gallery/MR-2018/Maharudram.jpg',
      width: window.innerWidth,
      dotContent: 'text1',
      dataHash: 'one'
    },
    {text: '', src: 'assets/img/gallery/athirudram2011/IMG_4002.jpg', width: window.innerWidth, dotContent: 'text2', dataHash: 'two'},
    {text: '', src: 'assets/img/gallery/2019/IMG_5292.jpg', width: window.innerWidth, dotContent: 'text2', dataHash: 'two'},
  ];
  title = 'VEDA Circle';
  owlNext = '&rarr;';
  owlPrev = '&larr;';
  screenWidth = window.innerWidth;

  customOptions: OwlOptions = {
    loop: true,
    autoWidth: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    mouseDrag: false,
    touchDrag: false,
    autoHeight: false,
    pullDrag: false,
    items:1,
    dots: true,
    navSpeed: 100,
    navText: ['Prev', 'Next'],
    responsive: {

      0: {
        items: 1
      }

    },
    nav: true
  };
  activeSlides: any;

  classes: { [key: string]: boolean } = {
    'animated': true,
    'fadeIn': true
  };

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


  getWidth() {

    var width = window.innerWidth;
    if (width <= 768) {
      this.screenWidth = width - 200
    }else {
      this.screenWidth = width + 100;
    }
  }

}
