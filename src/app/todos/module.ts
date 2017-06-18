import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomCommonModule } from '../common/common.module';
import { routing } from './routing';

import { Todos } from './todos.component';
import { TodosEvent } from './event/event';

@NgModule({
    imports: [
        CommonModule,
        CustomCommonModule,
        routing,
    ],
    declarations: [
        Todos,
        TodosEvent,
    ],
    providers: [

    ]
})
export class TodosModule {}