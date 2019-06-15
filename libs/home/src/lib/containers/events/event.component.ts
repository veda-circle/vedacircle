import {Component} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

export interface ActivityElement {
    day: string;
    time: string;
    location: string;
    topic: string;
}

export class SlideData {
    id?: string;
    text: string;
    dataMerge?: number;
    width?: number;
    dotContent?: string;
    src?: string;
    dataHash?: string;
}

const ELEMENT_DATA: ActivityElement[] = [
    {day: 'Sunday', time: '7:00 - 8:00pm', location: 'Sanatan Dharma Temple, Norwalk', topic: 'Veda Class - Upanishad'},
    {day: 'Monday', time: '7:00 - 8:00pm', location: 'Sanatan Dharma Temple, Norwalk', topic: 'Slokam'},
    {day: 'Tuesday', time: '7:00 - 8:00pm', location: 'Sanatan Dharma Temple, Norwalk', topic: 'Bhajan'},
    {day: 'Wednesday', time: '7:00 - 8:00pm', location: 'Sanatan Dharma Temple, Norwalk', topic: 'Bhajan'},
    {day: 'Thursday', time: '7:00 - 8:00pm', location: 'Irvine', topic: 'Veda class - Mahanyasam'},
    {day: 'Friday', time: '7:00 - 8:00pm', location: 'Sanatan Dharma Temple, Norwalk', topic: 'Bhajan'},
    {day: 'Saturday', time: '7:00 - 8:00pm', location: 'Sanatan Dharma Temple, Norwalk', topic: 'Veda class - Kids'},
];

@Component({
    selector: 'ngx-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
})
export class EventComponent {

    displayedColumns: string[] = ['day', 'time', 'location', 'topic'];
    dataSource = ELEMENT_DATA;

    slide: SlideData[] = [
        {
            text: 'Sri HH Mahaperiyavva Maharudram 2018',
            src: 'assets/img/gallery/MR-2018/events/Maharudram.jpg',
            width:  window.innerWidth,
            dotContent: 'text1',
            dataHash: 'one'
        },
        {text: 'Sri HH Mahaperiyavva Maharudram 2018', src: 'assets/img/gallery/MR-2018/events/IMG_4984.jpg', width:  window.innerWidth, dotContent: 'text2', dataHash: 'two'},
        {text: 'Sri HH Mahaperiyavva Maharudram 2018', src: 'assets/img/gallery/MR-2018/events/IMG_4986.jpg', width:  window.innerWidth, dotContent: 'text2', dataHash: 'two'},
        {text: 'Sri HH Mahaperiyavva Maharudram 2018', src: 'assets/img/gallery/MR-2018/events/IMG_4989.jpg', width:  window.innerWidth, dotContent: 'text2', dataHash: 'two'},
        {text: 'Athirudram 2011', src: 'assets/img/gallery/athirudram2011/IMG_4002.jpg', width:  window.innerWidth, dotContent: 'text2', dataHash: 'two'},
    ];
    title = 'owl-carousel-libdemo';
    owlNext = '&rarr;';
    owlPrev = '&larr;';
    screenWidth =  window.innerWidth;

    customOptions: OwlOptions = {
        loop: true,
        autoWidth: true,
        autoplay: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        touchDrag: false,
        autoHeight: false,
        pullDrag: false,
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


    constructor() {
    }


    getPassedData(data: any) {
        this.activeSlides = data;
        console.log(this.activeSlides);
    }

    addClassObj() {
        const startClasses: any = {...this.classes};
        startClasses['fade-spin'] = true;
        this.classes = startClasses;
    }

    deleteOneClass() {
        const startClasses: any = {...this.classes};
        delete startClasses['fade-spin'];
        this.classes = startClasses;
    }

    getChangeData(data: any) {
        this.activeSlides = data;
    }

    getChangedData(data: any) {
        this.activeSlides = data;
    }

    removeLastSlide() {
        this.slide.splice(-1, 1);
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
