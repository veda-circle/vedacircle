import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {Store} from '@ngxs/store';
import {SlideData} from '../events/event.component';


@Component({
    selector: 'ngx-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
}) /**/
export class LandingComponent {

    @ViewChild('newsheader', null) newsheader: ElementRef;
    @ViewChild('titleBar', null) titleBar: ElementRef;

    slide: SlideData[] = [

        {
            text: 'Sri HH Mahaperiyava 125th Jayanthi Maharudram',
            src: 'assets/img/gallery/MR-2018/Maharudram.jpg',
            width: window.innerWidth,
            dotContent: 'text1',
            dataHash: 'one'
        },
        {text: 'Lord Shiva Athitrudram', src: 'assets/img/gallery/athirudram2011/IMG_4002.jpg', width: window.innerWidth, dotContent: 'text2', dataHash: 'two'},
        {text: 'Arupadai Veedu Utsavam - Thiruchendur Soora Samharam', src: 'assets/img/gallery/MR-2018/events/IMG_4583.jpg', width: window.innerWidth, dotContent: 'text2', dataHash: 'three'},
        {text: 'Sri HH Mahaperiyava 125th Jayanthi Maharudram', src: 'assets/img/gallery/MR-2018/events/IMG_4989.jpg', width: window.innerWidth, dotContent: 'text2', dataHash: 'four'},
        {text: 'Sri HH Mahaperiyava 125th Jayanthi Maharudram', src: 'assets/img/gallery/MR-2018/events/IMG_4986.jpg', width: window.innerWidth, dotContent: 'text2', dataHash: 'five'},
        {
            text: 'Rama Mahayagnam',
            src: 'assets/img/gallery/rama-yagnam.gif',
            width: window.innerWidth,
            dotContent: 'text1',
            dataHash: 'zero'
        },
    ];

    constructor(private store: Store, private renderer: Renderer2) {

    }

    ngOnInit() {
        this.renderer.listen('window', 'scroll', event => {
            const number = window.scrollY;
            this.newsheader.nativeElement.style.display = 'none';
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
        this.newsheader.nativeElement.style.display = 'none';
        this.titleBar.nativeElement.style.display = 'block';
        this.titleBar.nativeElement.classList.remove('vc-hidden-large');
        this.titleBar.nativeElement.classList.add('vc-visible-large');
    }


}
