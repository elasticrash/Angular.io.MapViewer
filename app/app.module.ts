import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './components/app.component';
import { ToolbarElement } from './components/toolbar.element';
import { LeafletElement } from 'angular2.leaflet.components';

@NgModule({
  imports: [BrowserModule, MaterialModule.forRoot(), LeafletElement],
  declarations: [AppComponent, ToolbarElement],
  bootstrap: [AppComponent]
})
export class AppModule { }
