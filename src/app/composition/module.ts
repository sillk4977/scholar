import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomCommonModule } from '../common/common.module';

import { routing } from './routing';

import { CompositionBuilder } from './composition';
import { CompositionInput } from './composition-input/composition.input';

@NgModule({
    imports: [
        CommonModule,
        CustomCommonModule,
        routing,
    ],
    declarations: [
        CompositionBuilder,
        CompositionInput,
    ],
    providers: [

    ]
})
export class CompositionModule {

}