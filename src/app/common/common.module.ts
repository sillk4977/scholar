import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { AbNavTop } from './nav';
import { InputSuffix } from './directives';
import { LocalStorage } from './localstorage/localstorage.service';
import { ConfirmBtn } from './confirmBtn/confirmBtn';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
    ],
    declarations: [
        AbNavTop,
        InputSuffix,
        ConfirmBtn,
    ],
    providers: [
        LocalStorage,
    ],
    exports: [
        FormsModule,
        MaterialModule,
        AbNavTop,
        InputSuffix,
        ConfirmBtn,
    ]
})
export class CustomCommonModule {

}