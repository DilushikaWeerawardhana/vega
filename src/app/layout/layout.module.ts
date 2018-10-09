import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LayoutComponent, LayoutNavbarComponent, LayoutHeaderComponent],
  exports: [LayoutComponent, LayoutNavbarComponent]
})
export class LayoutModule {}
 