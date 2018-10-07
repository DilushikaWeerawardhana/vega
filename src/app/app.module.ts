import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AgGridModule } from "ag-grid-angular";
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
