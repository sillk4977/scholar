import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Composition } from './../models';

@Component({
    selector: 'composition-input',
    templateUrl: './composition.input.html',
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CompositionInput), multi: true },
    ]
})
export class CompositionInput implements ControlValueAccessor {
    input: Composition;
    edit: boolean = true;

    enter(event): void {
        if (event.keyCode == 13) {
            this.updateValue();
            this.edit = false;
        }
    }

    switchMode() {
        this.edit = !this.edit;
    }

    // implements
    changeFn: any[] = [];

    writeValue(val: Composition) {
        if (val) {
            this.input = <Composition> val;
        }
    }

    registerOnChange(fn): void {
        this.changeFn.push(fn);
    }

    registerOnTouched(fn): void {
        // pass;
    }

    updateValue() {
        this.changeFn.forEach(
            fn => {
                return fn(this.input);
            }
        )
    }
}