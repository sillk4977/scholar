import { Routes, RouterModule } from '@angular/router';

import { CompositionBuilder } from './composition';

export const routes: Routes = [
    { path: '**', component: CompositionBuilder, }
];

export const routing = RouterModule.forChild(routes);