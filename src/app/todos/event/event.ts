import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { LocalStorage } from '../../common/localstorage/localstorage.service';
import { EventModel, Erran } from './models';

@Component({
    selector: 'todos-event',
    templateUrl: './event.html',
    styles: [
        `.crossed { text-decoration: line-through }`,
        `.mat-grid-tile { overflow: visible }`,
    ]
})
export class TodosEvent implements OnInit {
    @Input() todosevent: EventModel;
    @Output() deleteTodo: EventEmitter<any> = new EventEmitter();

    input: Erran = new Erran();

    expand: boolean = false;
    edit: boolean = false;
    deleteConfirm: number = 0;

    constructor (
        private ls: LocalStorage,
    ) {}

    ngOnInit() {}

    get checkedCount() {
        return this.todosevent.errans.filter(item => item.checked).length;
    }

    get erranCount() {
        return this.todosevent.errans.length;
    }

    save() {
        this.ls.set(this.todosevent.id, this.todosevent);
    }

    newErran() {
        this.todosevent.errans.push(this.input);
        this.input = new Erran();
        this.save();
    }

    enterSaveErran(e) {
        if (e.keyCode == 13) {
            this.newErran();
        }
    }

    deleteErran(index: number) {
        this.todosevent.errans = this.todosevent.errans.slice(0, index).concat(this.todosevent.errans.slice(index + 1));
        this.save();
    }

    switchMode() {
        this.expand = !this.expand;
    }

    switchEdit() {
        this.edit = !this.edit;
    }

    saveEvent() {
        this.switchEdit();
        this.save();
    }

    enterSaveEvent(e) {
        if (e.keyCode == 13) {
            this.saveEvent();
        }
    }

    get deleteText() {
        if (this.deleteConfirm > 0) {
            return '确定要删除?';
        }
        return '删除';
    }

    delete() {
        if (this.deleteConfirm < 1) {
            this.deleteConfirm++;
            return;
        }
        this.deleteTodo.emit();
        this.deleteConfirm = 0;
    }
}