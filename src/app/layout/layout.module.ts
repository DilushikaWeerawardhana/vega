import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LayoutComponent, LayoutNavbarComponent],
  exports: [LayoutComponent, LayoutNavbarComponent]
})
export class LayoutModule {}
 