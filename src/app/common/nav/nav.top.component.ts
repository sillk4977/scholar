import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ab-nav-top',
    templateUrl: './nav.top.html'
})
export class AbNavTop implements OnInit {
    @Input() title: string = "TITLE";

    ngOnInit() {
        console.log(this.title);
    }
}