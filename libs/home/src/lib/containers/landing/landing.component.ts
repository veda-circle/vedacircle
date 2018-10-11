import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from "@angular/core";
import { PageTitleService } from "@vedacircle/core";
import {
  AdvancedLayout,
  GridLayout,
  Image,
  PlainGalleryConfig,
  PlainGalleryStrategy
} from "angular-modal-gallery";
import { FormBuilder, FormGroup } from "@angular/forms";
import { GalleryItem, ImageItem } from "@ngx-gallery/core";

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

const dataImages = [

  {
    srcUrl: "./assets/img/gallery/athirudram2011/IMG_4002.jpg",
    previewUrl: "./assets/img/gallery/athirudram2011/IMG_4002.jpg"
  },

  {
    srcUrl: "./assets/img/gallery/athirudram2011/IMG_4002.jpg",
    previewUrl: "./assets/img/gallery/athirudram2011/IMG_4002.jpg"
  },
  {
    srcUrl: "./assets/img/gallery/athirudram2011/IMG_4059.jpg",
    previewUrl: "./assets/img/gallery/athirudram2011/IMG_4059.jpg"
  },
  {
    srcUrl: "./assets/img/gallery/athirudram2011/IMG_4314.jpg",
    previewUrl: "./assets/img/gallery/athirudram2011/IMG_4314.jpg"
  },
  {
    srcUrl: "./assets/img/gallery/dp2017/img1.jpg",
    previewUrl: "./assets/img/gallery/dp2017/img1.jpg"
  },
  {
    srcUrl: "./assets/img/gallery/dp2017/img2.jpg",
    previewUrl: "./assets/img/gallery/dp2017/img2.jpg"
  },
  {
    srcUrl: "./assets/img/gallery/dp2017/img3.jpg",
    previewUrl: "./assets/img/gallery/dp2017/img3.jpg"
  },
  {
    srcUrl: "./assets/img/gallery/dp2015/IMG_1251.JPG",
    previewUrl: "./assets/img/gallery/dp2015/IMG_1251.JPG"
  },
  {
    srcUrl: "./assets/img/gallery/dp2015/IMG_1260.JPG",
    previewUrl: "./assets/img/gallery/dp2015/IMG_1260.JPG"
  },
  {
    srcUrl: "./assets/img/gallery/dp2015/IMG_1261.JPG",
    previewUrl: "./assets/img/gallery/dp2015/IMG_1261.JPG"
  },
  {
    srcUrl: "./assets/img/gallery/dp2015/IMG_1262.JPG",
    previewUrl: "./assets/img/gallery/dp2015/IMG_1262.JPG"
  },
  {
    srcUrl: "./assets/img/gallery/dp2015/IMG_1263.JPG",
    previewUrl: "./assets/img/gallery/dp2015/IMG_1263.JPG"
  },
  {
    srcUrl: "./assets/img/gallery/ayappa2017/IMG_4314.jpg",
    previewUrl: "./assets/img/gallery/ayappa2017/IMG_4314.jpg"
  },
  {
    srcUrl: "./assets/img/gallery/ayappa2017/IMG_4315.jpg",
    previewUrl: "./assets/img/gallery/ayappa2017/IMG_4315.jpg"
  },
  {
    srcUrl: "./assets/img/gallery/ayappa2017/IMG_4343.jpg",
    previewUrl: "./assets/img/gallery/ayappa2017/IMG_4343.jpg"
  },
  {
    srcUrl: "./assets/img/gallery/2018/venkateshwara/IMG_1.JPG",
    previewUrl: "./assets/img/gallery/2018/venkateshwara/IMG_1.JPG"
  },
  {
    srcUrl: "./assets/img/gallery/2018/venkateshwara/IMG_1.JPG",
    previewUrl: "./assets/img/gallery/2018/venkateshwara/IMG_1.JPG"
  }];

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

  ];

  displayedColumns: string[] = ["name", "day", "time", "audio"];
  dataSource = ELEMENT_DATA;
  paypalForm: FormGroup;

  slides = [
    {
      img: "./assets/img/gallery/MR-2018/MR-Page1.png",
      name: "Shri Kanchi MahaPeriyavva 125th Jayanthi Maharudra Mahotsavam",
      date: "2018-12-22 to 2018-12-24",
      description: "",
      time: ""
    },
    {
      img: "./assets/img/gallery/MR-2018/MR-Page2.png",
      name: "Shri Kanchi MahaPeriyavva 125th Jayanthi Maharudra Mahotsavam",
      date: "2018-12-22 to 2018-12-24",
      description: "",
      time: ""
    },
    {
      img: "./assets/img/gallery/2018/skandashasti/IMG_4320.jpg",
      name: "Arupadiveedu Skanda Shasti Event 2018",
      date: "2018-09-02 to 2018-11-18",
      description: "",
      time: ""
    }

  ];
  slideConfig = {
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    slidesToScroll: 1,
    centerMode: true,
    draggable: false,
    infinite: false,
    dots: false,
    focusOnSelect: true,
    adaptiveHeight: true
  };


  imageList: any = [];

  items: GalleryItem[];
  imagesData = dataImages;


  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout(
      { width: "319px", height: "210px" },
      { length: 4, wrap: true }
    )
  };

  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  @ViewChild("about") about: ElementRef;
  @ViewChild("vcgallery") vcgallery: ElementRef;
  @ViewChild("calEvents") calEvents: ElementRef;
  @ViewChild("org") org: ElementRef;
  @ViewChild("donate") donate: ElementRef;
  @ViewChild("classes") classes: ElementRef;
  @ViewChild("subscribe") subscribe: ElementRef;


  constructor(
    public _pageTitleService: PageTitleService,
    private renderer: Renderer2
  ) {
  }


  getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }


  ngOnInit(): void {
    this._pageTitleService.title = "";
    this.items = this.imagesData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));

      this.renderer.listen('window', 'scroll', (event) => {
       const number = window.scrollY;
       if (number > 300 && number < 800) {
         this.renderer.setAttribute(this.about.nativeElement, 'data-vc-scrollspy', "{cls:'vc-active'}");
       }
       else if (number > 800 && number < 1400) {
         this.renderer.setAttribute(this.vcgallery.nativeElement, 'data-vc-scrollspy', "{cls:'vc-active'}");
       }
       else if (number > 2300 && number < 2800) {
         this.renderer.setAttribute(this.calEvents.nativeElement, 'data-vc-scrollspy', "{cls:'vc-active'}");
       }
       else if (number > 3000 && number < 4000) {
         this.renderer.setAttribute(this.org.nativeElement, 'data-vc-scrollspy', "{cls:'vc-active'}");
       }
       else if (number > 4000 && number < 5000) {
         this.renderer.setAttribute(this.subscribe.nativeElement, 'data-vc-scrollspy', "{cls:'vc-active'}");
       }
       else if (number > 5000 && number < 6000) {
         this.renderer.setAttribute(this.classes.nativeElement, 'data-vc-scrollspy', "{cls:'vc-active'}");
       }
       else if (number > 6000) {
         this.renderer.setAttribute(this.donate.nativeElement, 'data-vc-scrollspy', "{cls:'vc-active'}");
       }
     });
  }
}
