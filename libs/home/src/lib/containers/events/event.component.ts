import {Component} from '@angular/core';
import * as moment from 'moment';

export interface ActivityElement {
    day: string;
    time: string;
    location: string;
    topic: string;
}

export class SlideData {
    id?: string;
    text: string;
    subtext?: string;
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
            src: 'assets/img/gallery/MR-2018/thumb-nails/Maharudram.jpg',
            width: window.innerWidth,
            dotContent: 'text1',
            dataHash: 'one'
        },
        {
            text: 'Sri HH Mahaperiyavva Maharudram 2018',
            src: 'assets/img/gallery/MR-2018/thumb-nails/IMG_4989.jpg',
            width: window.innerWidth,
            dotContent: 'text2',
            dataHash: 'two'
        },
        {
            text: 'Deepa Pooja',
            src: 'assets/img/gallery/dp2015/1.JPG',
            width: window.innerWidth,
            dotContent: 'text2',
            dataHash: 'two'
        },
        {
            text: 'Deepa Pooja',
            src: 'assets/img/gallery/dp2015/2.JPG',
            width: window.innerWidth,
            dotContent: 'text2',
            dataHash: 'two'
        },
        {
            text: 'Deepa Pooja',
            src: 'assets/img/gallery/dp2015/3.JPG',
            width: window.innerWidth,
            dotContent: 'text2',
            dataHash: 'two'
        },
        {
            text: 'Deepa Pooja',
            src: 'assets/img/gallery/dp2015/4.JPG',
            width: window.innerWidth,
            dotContent: 'text2',
            dataHash: 'two'
        }, {
            text: 'Deepa Pooja',
            src: 'assets/img/gallery/dp2015/5.JPG',
            width: window.innerWidth,
            dotContent: 'text2',
            dataHash: 'two'
        },

    ];


    slides: any = [[]];
    cards: SlideData[] = [
        {
            text: 'Shri ShataChandi Mahayagnam and Maharudram',
            subtext: 'Sep 28, 2019 - Oct 8, 2019',
            src: 'assets/img/gallery/2019/SC_1.png',
            width: window.innerWidth,
            dotContent: 'text1',
            id: 'one'
        },
        {
            text: 'Shri ShataChandi Mahayagnam and Maharudram',
            subtext: 'Sep 28, 2019 - Oct 8, 2019',
            src: 'assets/img/gallery/2019/SC_2.png',
            width: window.innerWidth,
            dotContent: 'text2',
            id: 'two'
        },
        {
            text: 'Shri ShataChandi Mahayagnam and Maharudram',
            subtext: 'Sep 28, 2019 - Oct 8, 2019',
            src: 'assets/img/gallery/2019/SC_3.png',
            width: window.innerWidth,
            dotContent: 'text2',
            id: 'three'
        },
        {
            text: 'Shri ShataChandi Mahayagnam and Maharudram',
            subtext: 'Sep 28, 2019 - Oct 8, 2019',
            src: 'assets/img/gallery/2019/SC_4.png',
            width: window.innerWidth,
            dotContent: 'text2',
            id: 'four'
        },
        {
            text: 'Shri ShataChandi Mahayagnam and Maharudram',
            subtext: 'Sep 28, 2019 - Oct 8, 2019',
            src: 'assets/img/gallery/2019/SC_5.png',
            width: window.innerWidth,
            dotContent: 'text2',
            id: 'five'
        },
    ];


    constructor() {
        this.slides = this.chunk(this.cards, 1);
    }

    chunk(arr, chunkSize) {
        let R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }

    getWidth() {

        var width = window.innerWidth;
        if (width <= 768) {
            width = width;
        } else {
            width = width - 550;
        }
        return width;
    }

    getDays() {

        var now = moment(new Date()); //todays date
        var end = moment('2019-09-28'); // another date
        var duration = moment.duration(end.diff(now));
        return duration.asDays().toFixed();
    }
}
