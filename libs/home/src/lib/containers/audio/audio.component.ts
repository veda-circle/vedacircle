import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivityElement} from '../events/event.component';


export interface AudioEntity {
    blogImage: string;
    fileLink: string;
    title: string;
    author: string;
    description: string;
    postId: string;
}

@Component({
    selector: 'ngx-audio',
    templateUrl: './audio.component.html',
    styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {


    idx: any = 0;
    data: AudioEntity[] = [
        {
            postId: '001',
            blogImage: 'assets/img/gallery/audio/vinayaka-chaturthi.jpg',
            fileLink: 'assets/audio/AUDIO-2019-05-29-11-14-40.mp3',
            title: 'Sanatan Dharma Temple, Norwalk',
            author: 'Pandit Sivaramakrishnan',
            description: 'ddd'
        },
        {
            postId: '002',
            blogImage: 'assets/img/gallery/audio/shatkam.png',
            fileLink: '7:00 - 8:00pm',
            title: 'Sanatan Dharma Temple, Norwalk',
            author: 'Pandit Sivaramakrishnan',
            description: 'ddd'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
