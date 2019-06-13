import {Component} from '@angular/core';


export interface ActivityElement {
    day: string;
    time: string;
    location: string;
    topic: string;
}

const ELEMENT_DATA: ActivityElement[] = [
    {day: 'Sunday', time: '7:00 - 7:30pm', location: 'Sanatan Dharma Temple, Norwalk', topic: 'Bhajan'},
    {day: 'Monday', time: '7:00 - 7:30pm', location: 'Sanatan Dharma Temple, Norwalk', topic: 'Slokam'},
    {day: 'Tuesday', time: '7:00 - 7:30pm', location: 'Sanatan Dharma Temple, Norwalk', topic: 'Bhajan'},
    {day: 'Wednesday', time: '7:00 - 7:30pm', location: 'Sanatan Dharma Temple, Norwalk', topic: 'Bhajan'},
    {day: 'Thursday', time: '7:00 - 7:30pm', location: 'Irvine', topic: 'VEDA Volume - 1, Mahanyasam'},
    {day: 'Friday', time: '7:00 - 7:30pm', location: 'Sanatan Dharma Temple, Norwalk', topic: 'Bhajan'},
    {day: 'Saturday', time: '7:00 - 7:30pm', location: 'Sanatan Dharma Temple, Norwalk', topic: 'Bhajan'},
];

@Component({
    selector: 'ngx-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
})
export class EventComponent {

    displayedColumns: string[] = ['day', 'time', 'location', 'topic'];
    dataSource = ELEMENT_DATA;

    constructor() {
    }

}
