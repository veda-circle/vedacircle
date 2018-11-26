import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";

import "rxjs/add/observable/fromEvent";
import { GalleryItem, ImageItem } from "@ngx-gallery/core";


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
  selector: "ngx-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {


  items: GalleryItem[];
  imagesData = dataImages;
  slides = [
    {
      img: "./assets/img/gallery/MR-2018/MR-page1.png",
      name: "Shri Kanchi MahaPeriyavva 125th Jayanthi Maharudra Mahotsavam",
      date: "2018-12-22 to 2018-12-24",
      description: "",
      time: ""
    },
    {
      img: "./assets/img/gallery/MR-2018/MR-page2.png",
      name: "Shri Kanchi MahaPeriyavva 125th Jayanthi Maharudra Mahotsavam",
      date: "2018-12-22 to 2018-12-24",
      description: "",
      time: ""
    }

  ];
  zoomMode = "hover";
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


  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

    this.items = this.imagesData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


  }

}
