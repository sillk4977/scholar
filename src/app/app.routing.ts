import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'todos', loadChildren: './todos/module#TodosModule' },
    { path: '', loadChildren: './composition/module#CompositionModule' },
    { path: '**', redirectTo: 'todos' },
];

export const routing = RouterModule.forRoot(routes, {useHash: true});