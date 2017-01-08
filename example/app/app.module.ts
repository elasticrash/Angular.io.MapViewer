import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './components/app.component';
import { AppComponent1 } from './components/app.component.1';
import { AppComponent2 } from './components/app.component.2';
import { AppComponent3 } from './components/app.component.3';
import { RandomPoints } from './components/random.points';
import { Simple } from './components/simple';
import { ToolbarElement } from './components/toolbar.element';
import { CandTLeafletComponent } from 'angular2.leaflet.components';
import { CandTLeafletService } from 'angular2.leaflet.components';
import { RouterModule } from '@angular/router';
import { GeneratePoints } from './experiments/generate.points';
import { CoordinateControl } from './components/coordinates';


@NgModule({
  imports: [BrowserModule, MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'mm-map', component: AppComponent1 },
      { path: '', component: AppComponent2 },
      { path: 'prj', component: AppComponent3 },
      { path: 'random', component: RandomPoints },
      { path: 'simple', component: Simple }
    ], { useHash: true }),
  ],
  declarations: [AppComponent, AppComponent1, AppComponent2, AppComponent3,
    RandomPoints, GeneratePoints, Simple, ToolbarElement, CandTLeafletComponent, CoordinateControl],
  providers: [CandTLeafletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
