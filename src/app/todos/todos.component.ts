import { Component, OnInit } from '@angular/core';

import { LocalStorage } from '../common/localstorage/localstorage.service';

import { EventModel } from './event/models';

@Component({
    selector: 'todos-panel',
    templateUrl: './todos.html'
})
export class Todos implements OnInit {
    events: EventModel[] = [];

    ids_key = 'todoseventids';

    constructor(
        private ls: LocalStorage
    ){}

    ngOnInit() {
        let eventids = this.ls.get(this.ids_key);
        if (eventids) {
            eventids.forEach(
                item => {
                    let e = this.ls.get(item);
                    if (e) {
                        this.events.push(e)
                    }
                }
            )
        }
    }

    newEvent(): void {
        let e = new EventModel();
        e.name = "新事件";
        this.events.push(e);
        this.saveEvent(e);
    }

    saveEvent(e: EventModel): void {
        let eventids = this.ls.get(this.ids_key);
        if (!eventids) {
            eventids = [];
        }
        eventids.push(e.id);
        this.ls.set(this.ids_key, eventids);

        this.ls.set(e.id, e);
    }

    deleteEvent(index: number): void {
        let e = this.events[index];
        this.events = this.events.slice(0, index).concat(this.events.slice(index + 1));

        let eventids = this.ls.get(this.ids_key);
        eventids = eventids.slice(0, index).concat(eventids.slice(index + 1));
        this.ls.set(this.ids_key, eventids);
        this.ls.del(e.id);
    }
}