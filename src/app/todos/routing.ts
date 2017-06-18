import { Routes, RouterModule } from '@angular/router';

import { Todos } from './todos.component';

export const routes: Routes = [
    { path: '**', component: Todos }
];

export const routing = RouterModule.forChild(routes);