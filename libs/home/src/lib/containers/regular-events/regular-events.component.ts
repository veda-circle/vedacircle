import {Component} from '@angular/core';

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
    selector: 'ngx-regular-events',
    templateUrl: './regular-events.component.html',
    styleUrls: ['./regular-events.component.scss'],
})
export class RegularEventsComponent {

    displayedColumns: string[] = ['day', 'time', 'location', 'topic'];
    dataSource = ELEMENT_DATA;

    scSlides: SlideData[] = [
        {
            text: 'Shri ShataChandi Mahayagnam and Maharudram [ Sep 28, 2019 - Oct 8, 2019 ]',
            src: 'assets/img/gallery/2019/SC_1.png',
            width:  window.innerWidth,
            dotContent: 'text1',
            dataHash: 'one'
        },
        {text: 'Shri ShataChandi Mahayagnam and Maharudram [ Sep 28, 2019 - Oct 8, 2019 ]', src: 'assets/img/gallery/2019/SC_2.png', width:  window.innerWidth, dotContent: 'text2', dataHash: 'two'},
        {text: 'Shri ShataChandi Mahayagnam and Maharudram [ Sep 28, 2019 - Oct 8, 2019 ]', src: 'assets/img/gallery/2019/SC_3.png', width:  window.innerWidth, dotContent: 'text2', dataHash: 'two'},
        {text: 'Shri ShataChandi Mahayagnam and Maharudram [ Sep 28, 2019 - Oct 8, 2019 ]', src: 'assets/img/gallery/2019/SC_4.png', width:  window.innerWidth, dotContent: 'text2', dataHash: 'two'},
        {text: 'Shri ShataChandi Mahayagnam and Maharudram [ Sep 28, 2019 - Oct 8, 2019 ]', src: 'assets/img/gallery/2019/SC_5.png', width:  window.innerWidth, dotContent: 'text2', dataHash: 'two'},
    ];
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


    classes: { [key: string]: boolean } = {
        'animated': true,
        'fadeIn': true
    };


    constructor() {
    }


}
