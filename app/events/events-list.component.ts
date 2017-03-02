import {Component} from "@angular/core";
/**
 * Created by stan on 3/1/17.
 */

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr>
        <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
    </div>
`
})
export class EventsListComponent {
    event1 = {
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data) {
        console.log('received:', data);
    }
}