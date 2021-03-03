import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
    {
        path: '',
        component: ToolsComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
