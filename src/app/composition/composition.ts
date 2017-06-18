import { Component, Injectable } from '@angular/core';

import { LocalStorage } from '../common/localstorage/localstorage.service';
import { Composition } from './models';

@Component({
    selector: 'composition-builder',
    templateUrl: './composition.html',
})
export class CompositionBuilder {
    compositions: Composition[] = [new Composition(), ];

    constructor (
        private ls: LocalStorage,
    ) {
        let local = ls.get("compositions");
        if (local) {
            this.compositions = local as Composition[];
        }
    }

    append() {
        this.compositions.push(new Composition());
    }

    save() {
        this.ls.set("compositions", this.compositions);
    }
}