import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './components/app.component';
import { ToolbarElement } from './components/toolbar.element';
import { CandTLeafletComponent  } from 'angular2.leaflet.components';

@NgModule({
  imports: [BrowserModule, MaterialModule.forRoot() ],
  declarations: [AppComponent, ToolbarElement, CandTLeafletComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
