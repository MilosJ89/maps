import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MapComponent } from './components/map.component';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
      MapComponent
  ]
})
export class MapModule { }
