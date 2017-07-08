import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'confirm-btn',
    templateUrl: './btn.html',
})
export class ConfirmBtn {
    @Input() color = 'warn';
    @Input() confirmArray: Array<string> = [];
    @Input() interval: number = 3000;
    @Output() confirmed: EventEmitter<any> = new EventEmitter();
    
    private intervalhandle: any = null;
    private _counter = 0;

    get text() {
        if (this.confirmArray.length < 1) {
            return "Confirm";
        }
        if (this._counter >= this.confirmArray.length) {
            return this.confirmArray[0];
        }
        return this.confirmArray[this._counter];
    }

    onClick() {
        this._counter++;
        if (this._counter >= this.confirmArray.length) {
            this.confirmed.emit(null);
            this._counter = 0;
            clearInterval(this.intervalhandle);
            this.intervalhandle = null;
        }
        if (!this.intervalhandle) {
            this.intervalhandle = setInterval(
                () => {
                    if (this._counter > 0) {
                        this._counter--;
                    }
                },
                this.interval);
        }
    }
}