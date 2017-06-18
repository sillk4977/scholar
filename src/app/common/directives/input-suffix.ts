import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[input-suffix]',
})
export class InputSuffix {
    constructor (
        private ele: ElementRef,
    ) {
        ele.nativeElement.style.position = 'absolute';
        ele.nativeElement.style.right = '0px';
        ele.nativeElement.style.bottom = '0px';
    }


}