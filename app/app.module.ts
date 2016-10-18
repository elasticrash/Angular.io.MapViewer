import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './components/app.component';
import { ToolbarElement } from './components/toolbar.element';

@NgModule({
  imports: [BrowserModule, MaterialModule.forRoot()],
  declarations: [AppComponent, ToolbarElement],
  bootstrap: [AppComponent]
})
export class AppModule { }
