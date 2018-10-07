import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
      path: '',
      component: LayoutComponent,
      canActivate: [],
      children: [
        {
          path: 'dashboard',
          loadChildren: './dashboard/dashboard.module#DashboardModule'
        }
      ]
    }
    // { path: '**', redirectTo: 'dashboard' }
  ]

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { useHash: true }),
      CommonModule
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }