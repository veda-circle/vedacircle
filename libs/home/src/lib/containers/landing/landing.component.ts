import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { PageTitleService } from "@ngx-starter-kit/core";
import {
  AdvancedLayout,
  GridLayout,
  Image,
  PlainGalleryConfig,
  PlainGalleryStrategy
} from "angular-modal-gallery";
import { FormBuilder, FormGroup } from "@angular/forms";

export interface ClassesElement {
  name: string;
  day: string;
  time: string;
  audio: string;
}

const ELEMENT_DATA: ClassesElement[] = [
  { day: "Monday", name: "Shloka Class", time: "07:30 PM - 09:00 PM", audio: "" },
  { day: "Tuesday", name: "Shloka Class", time: "07:30 PM - 09:00 PM", audio: "" },
  { day: "Wednesday", name: "Veda Class", time: "07:30 PM - 09:00 PM", audio: "" },
  { day: "Thursday", name: "Veda Class(Irvine)", time: "07:30 PM - 09:00 PM", audio: "" },
  { day: "Friday", name: "Veda Class", time: "07:30 PM - 09:00 PM", audio: "" },
  { day: "Saturday", name: "Kids Veda Class", time: "04:30 PM - 06:00 PM", audio: "" },
  { day: "Sunday", name: "Veda Class", time: "04:30 PM - 06:00 PM", audio: "" }

];

@Component({
  selector: "ngx-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {

  public imageUrls: (any)[] = [
    {
      url: "./assets/img/gallery/athirudram2011/IMG_4002.jpg",
      caption: "Lord Shiva - Sivarathiri"

    },
    {
      url: "./assets/img/gallery/ayappa2017/IMG_4343.jpg",
      caption: "Lord Shiva - Sharavan Somavar"
    },
    {
      url: "./assets/img/gallery/dp2015/IMG_1263.JPG",
      caption: "Deepa Pooja 2015"
    }
    /* {
       url: './assets/img/gallery/MR-2018/MR-Page1.png',
       caption: 'Maharudram 2018',
     },
     {
       url: './assets/img/gallery/MR-2018/MR-Page2.png',
       caption: 'Maharudram 2018',
     },*/
  ];
  displayedColumns: string[] = ["name", "day", "time", "audio"];
  dataSource = ELEMENT_DATA;
  paypalForm: FormGroup;

  images: Image[] = [
    new Image(
      0,
      {
        img: "./assets/img/gallery/athirudram2011/IMG_4002.jpg",
        description: "The Athirudram: The offering of 11 Maharudrams in 11 consecutive days is known as \"The Athirudram\". " +
          "121 Ritwiks participate for 11 days and chant “The Rudram” on all eleven days. " +
          "The Athirudram consists of 14,641 Namakam chants and 1,331 Chamakam chants ",
        title: "Athirudram 2011"
      }
    ),
    new Image(
      1,
      {
        img: "./assets/img/gallery/dp2017/img2.jpg",
        description: "Participants who came in were ushered in with all that was needed for the conduct of the worship." +
          "The puja committee volunteer effort was led by Savithri Krishnamurthy with the support of Rukmini Raghunathan.",
        title: "Deepa Pooja 2017"
      }
    ),
    new Image(
      2,
      {
        img: "./assets/img/gallery/dp2015/IMG_1251.JPG",
        description: "Participants who came in were ushered in with all that was needed for the conduct of the worship." +
          "The puja committee volunteer effort was led by Savithri Krishnamurthy with the support of Rukmini Raghunathan.",
        title: "Deepa Pooja 2015"
      }
    ),
    new Image(
      3,
      {
        img: "./assets/img/gallery/ayappa2017/IMG_4314.jpg",
        title: "Ayappa Pooja 2017",
        description: "Ayyappan is the Hindu god of growth, particularly popular in Kerala and the rest of South India." +
          "He is a synthetic deity, the son of Shiva and Mohini – the female avatar of Vishnu"
      }
    ),
    new Image(
      4,
      {
        img: "./assets/img/gallery/2018/venkateshwara/IMG_0.JPG",
        title: "Lord Venkateshware Pooja 2018",
        description: "Purattasi Sani or Tirumala Shanivara is a Hindu festival celebrated in some parts of South India including Andhra Pradesh, " +
          "Karnataka, Tamil Nadu and Kerala"
      }
    )
  ];
  imageList: any = [];
  imageGroup: any = {

    "1": [
      new Image(
        0,
        {
          img: "./assets/img/gallery/athirudram2011/IMG_4002.jpg",
          description: "Athirudram 2011"
        }
      ),
      new Image(
        1,
        {
          img: "./assets/img/gallery/athirudram2011/IMG_4059.jpg",
          description: "Athirudram 2011"
        }
      ),
      new Image(
        2,
        {
          img: "./assets/img/gallery/athirudram2011/IMG_4314.jpg",
          description: "Athirudram 2011"
        }
      )
    ],
    "2": [
      new Image(
        0,
        {
          img: "./assets/img/gallery/dp2017/img1.jpg",
          description: "Deepa Pooja 2017"
        }
      ),
      new Image(
        1,
        {
          img: "./assets/img/gallery/dp2017/img2.jpg",
          description: "Deepa Pooja 2017"
        }
      ),
      new Image(
        2,
        {
          img: "./assets/img/gallery/dp2017/img3.jpg",
          description: "Deepa Pooja 2017"
        }
      )
    ],
    "3": [
      new Image(
        0,
        { // modal
          img: "./assets/img/gallery/dp2015/IMG_1251.JPG",
          description: "Deepa Pooja 2015"
        }
      ),
      new Image(
        1,
        {
          img: "./assets/img/gallery/dp2015/IMG_1260.JPG",
          description: "Deepa Pooja 2015"
        }
      ),
      new Image(
        2,
        {
          img: "./assets/img/gallery/dp2015/IMG_1261.JPG",
          description: "Deepa Pooja 2015"
        }
      ),
      new Image(
        3,
        {
          img: "./assets/img/gallery/dp2015/IMG_1262.JPG",
          description: "Deepa Pooja 2015"
        }
      ),
      new Image(
        4,
        {
          img: "./assets/img/gallery/dp2015/IMG_1263.JPG",
          description: "Deepa Pooja 2015"
        }
      )
    ],
    "4": [
      new Image(
        0,
        { // modal
          img: "./assets/img/gallery/ayappa2017/IMG_4314.jpg",
          description: "Ayappa 2017"
        }
      ),
      new Image(
        1,
        { // modal
          img: "./assets/img/gallery/ayappa2017/IMG_4315.jpg",
          description: "Ayappa 2017"
        }
      ),
      new Image(
        2,
        { // modal
          img: "./assets/img/gallery/ayappa2017/IMG_4343.jpg",
          description: "Ayappa 2017"
        }
      )
    ],
    "5": [
      new Image(
        0,
        { // modal
          img: "./assets/img/gallery/2018/venkateshwara/IMG_1.JPG",
          description: "Lord Venkateshwara - Puratassi Celeberation"
        }
      ),
      new Image(
        1,
        { // modal
          img: "./assets/img/gallery/2018/venkateshwara/IMG_1.JPG",
          description: "Lord Venkateshwara - Puratassi Celeberation"
        }
      )
    ]

  };

  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: "319px", height: "210px" }, { length: 4, wrap: true })
  };

  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };


  @ViewChild('about') about: ElementRef;
  @ViewChild('gallery') gallery: ElementRef;
  @ViewChild('events') events: ElementRef;
  @ViewChild('org') org: ElementRef;
  @ViewChild('donate') donate: ElementRef;
  @ViewChild('classes') classes: ElementRef;
  @ViewChild('subscribe') subscribe: ElementRef;

 /* height: string = '100%';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  width: string = '100%';*/

  constructor(public _pageTitleService: PageTitleService, private renderer: Renderer2) {

  }

  openImageModalRowDescription(idx: number) {
    this.imageList = Object.assign(this.imageGroup[idx + 1]);
    console.log(this.imageList);
    const index: number = this.getCurrentIndexCustomLayout(this.imageGroup[idx + 1][0], this.imageGroup[idx + 1]);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  ngOnInit(): void {
    this._pageTitleService.title = '';
    this.imageList = this.images;

    /* this.renderer.listen('window', 'scroll', (event) => {
       const number = window.scrollY;
       if (number > 300 && number < 800) {
         this.renderer.setAttribute(this.about.nativeElement, 'data-vc-scrollspy', '{cls:"vc-active"}');
       }
       else if (number > 800 && number < 1400) {
         this.renderer.setAttribute(this.gallery.nativeElement, 'data-vc-scrollspy', '{cls:"vc-active"}');
       }
       else if (number > 2300 && number < 2800) {
         this.renderer.setAttribute(this.events.nativeElement, 'data-vc-scrollspy', '{cls:"vc-active"}');
       }
       else if (number > 3000 && number < 4000) {
         this.renderer.setAttribute(this.org.nativeElement, 'data-vc-scrollspy', '{cls:"vc-active"}');
       }
       else if (number > 4000 && number < 5000) {
         this.renderer.setAttribute(this.subscribe.nativeElement, 'data-vc-scrollspy', '{cls:"vc-active"}');
       }
       else if (number > 5000 && number < 6000) {
         this.renderer.setAttribute(this.classes.nativeElement, 'data-vc-scrollspy', '{cls:"vc-active"}');
       }
       else if (number > 6000) {
         this.renderer.setAttribute(this.donate.nativeElement, 'data-vc-scrollspy', '{cls:"vc-active"}');
       }
     });*/
  }

}
