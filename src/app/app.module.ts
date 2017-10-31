import { AnnotationService } from './services/annotation.service';
import { IntroViewComponent } from './intro-view/intro-view.component';
import { AppComponent } from "./app.component";
import { CoordinateControl } from './display-coordinates/coordinates';
import { ExtendedMapComponent } from './extended/extended-map.component';
import { RandomPoints } from './random/random.points';
import { GameComponent } from './game/game-map.component';
import { BasicMapComponent } from './basic/basic-map.component';
import { CustomProjectionComponent } from './custom-projection/custom-projection.component';
import { Simple } from './simple/simple.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ngxLeafletModule } from 'ngx.leaflet.components/ngx.leaflet.module';
import { RouterModule } from '@angular/router';
import { GeneratePoints } from './experiments/generate.points';
import { GamePoints } from './game/game';
import { GameResolver } from './game/game.resolver';
import { MainViewComponent } from "./main-view/main-view.component";
import { ToolbarElement } from "./toolbar/toolbar.element";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpatialIndexComponent } from 'app/spatial-index/spatial-index.component';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatListModule
} from "@angular/material";

const MaterialModule = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatListModule
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ...MaterialModule,
    ngxLeafletModule,
    RouterModule.forRoot([
      { path: '', component: IntroViewComponent },
      { path: 'main', component: MainViewComponent },
      { path: 'basic', component: BasicMapComponent },
      { path: 'extended', component: ExtendedMapComponent },
      { path: 'projection', component: CustomProjectionComponent },
      { path: 'spindex', component: SpatialIndexComponent },      
      {
        path: 'game', component: GameComponent,
        resolve: {
          countries: GameResolver
        }
      },
      { path: 'random', component: RandomPoints },
      { path: 'simple', component: Simple },
    ], {
        useHash: true,
      }),
  ],
  declarations: [
    AppComponent,
    IntroViewComponent,
    MainViewComponent,
    BasicMapComponent,
    ExtendedMapComponent,
    CustomProjectionComponent,
    GameComponent,
    SpatialIndexComponent,
    GamePoints,
    RandomPoints,
    GeneratePoints,
    Simple,
    ToolbarElement,
    CoordinateControl
  ],
  exports: [
    ...MaterialModule,
  ],
  providers: [GameResolver, AnnotationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
