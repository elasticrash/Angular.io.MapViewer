import { CustomProjectionComponent } from './custom-projection/custom-projection.component';
import { Simple } from './simple/simple.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app.component';
import { AppComponent1 } from './components/app.component.1';
import { AppComponent2 } from './components/app.component.2';
import { AppComponent4 } from './components/app.component.4';
import { RandomPoints } from './components/random.points';
import { ngxLeafletModule } from 'ngx.leaflet.components/ngx.leaflet.module';
import { RouterModule } from '@angular/router';
import { GeneratePoints } from './experiments/generate.points';
import { CoordinateControl } from './components/coordinates';
import { GamePoints } from './game/game';
import { GameResolver } from './game/game.resolver';
import { MainViewComponent } from "./main-view/main-view.component";
import { ToolbarElement } from "./toolbar/toolbar.element";


@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    ngxLeafletModule,
    RouterModule.forRoot([
      { path: 'mm-map', component: AppComponent1 },
      { path: '', component: MainViewComponent },
      { path: 'prj', component: CustomProjectionComponent },
      {
        path: 'game', component: AppComponent4,
        resolve: {
          countries: GameResolver
        }
      },
      { path: 'random', component: RandomPoints },
      { path: 'simple', component: Simple }
    ]),
  ],
  declarations: [AppComponent, MainViewComponent, AppComponent1, AppComponent2, CustomProjectionComponent, AppComponent4, GamePoints,
    RandomPoints, GeneratePoints, Simple, ToolbarElement, CoordinateControl],
  providers: [GameResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
