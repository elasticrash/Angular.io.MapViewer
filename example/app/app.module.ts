import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './components/app.component';
import { AppComponent1 } from './components/app.component.1';
import { AppComponent2 } from './components/app.component.2';
import { RandomPoints } from './components/random.points';
import { ToolbarElement } from './components/toolbar.element';
import { CandTLeafletComponent } from 'angular2.leaflet.components';
import { CandTLeafletService } from 'angular2.leaflet.components';
import { RouterModule } from '@angular/router';
import { GeneratePoints } from './experiments/generate.points';


@NgModule({
  imports: [BrowserModule, MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'mm-map', component: AppComponent1 },
      { path: '', component: AppComponent2 },
      { path: 'random', component: RandomPoints }
    ], { useHash: true }),
  ],
  declarations: [AppComponent, AppComponent1, AppComponent2,
   RandomPoints, GeneratePoints, ToolbarElement, CandTLeafletComponent],
  providers: [CandTLeafletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
