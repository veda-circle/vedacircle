import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  startOfDay,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'ngx-cal-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['calendar.component.scss'],
  templateUrl: 'calendar.component.html',
})
export class CalendarComponent {

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();


  actions: CalendarEventAction[] = [
    /*{
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },*/
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date('2018-10-07T00:15:00-00:00')),
      //end: addDays(new Date(), 0),
      title: 'Lord Venkateswara - Puratassi Abhishekam: Between 3pm to 7:30pm',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      draggable: false,
    },
    {
      start: startOfDay(new Date('2018-10-08T00:15:00-00:00')),
      //end: addDays(new Date(), 1),
      title: 'Aarupadai Veedu Utsvam 2018 (Pazhani) - Pasadena Temple: Between 3pm to 7:30pm',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      draggable: false,
    },
    {
      start: startOfDay(new Date('2018-10-29T00:00:00-00:00')),
      //end: addDays(new Date(), 1),
      title: 'Aarupadai Veedu Utsvam 2018 (Soorasamharam) - Bolsa Chica Beach: Between 12pm to 4pm',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      draggable: false,
    },
    {
      start: startOfDay(new Date('2018-11-04T00:00:00-00:00')),
      //end: addDays(new Date(), 1),
      title: 'Aarupadai Veedu Utsvam 2018 (Pazhamudir Cholai) - Lakshmi Narayan Mandir( Riverside): Between 2:30pm to 7:30pm',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      draggable: false,
    },
    {
      start: startOfDay(new Date('2018-11-12T00:00:00-00:00')),
      //end: addDays(new Date(), 1),
      title: 'Aarupadai Veedu Utsvam 2018 (Swami Malai) - Mahaganpathi Temple(Arizona): Between 8:30am to 2:30pm',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      draggable: false,
    },
    /*{
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true,
    }*/
  ];

  activeDayIsOpen: boolean = false;

  constructor() {
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd,
                    }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {

  }
/*
  addEvent(): void {
    this.calEvents.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    });
    this.refresh.next();
  }*/
}
