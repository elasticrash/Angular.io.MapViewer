import { AnnotationService } from '../services/annotation.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'main-view',
    templateUrl: 'main-view.component.html',
    styleUrls: ['main-view.component.css'],
})

export class MainViewComponent implements OnInit {

    constructor(
        private router: Router) { }

    ngOnInit() { }

    fullscreen(where: string) {
        this.router.navigate([where]);
    }

    getTemplate(type) {
        if(type === "bm"){
            return `
        <leaf-element [zoom]=* [layerControl]=*>
            <layer-element [slippyLayer]="*">
            </layer-element>
            <layer-element [wmsLayer]="*" [name]="*" [opacity]=*>
            </layer-element>
            <leaflet-group>
                <circle-element [lat]=* [lon]=* [radius]=*></circle-element>
                <circle-element [lat]=* [lon]=* [radius]=* [Options]="{*}">
                </circle-element>
            </leaflet-group>
            <polygon-element [latlngs]="[[*],[*], [*], [*]]">
            </polygon-element>
        </leaf-element>`;
        }
        if(type === "ss"){
            return `
            <leaf-element class="*" [zoom]=* crs=L.CRS.Simple [x]=0 [y]=0>
                <circle-element *ngFor="let *; of:*;" [mouseover]='*'
                 [lat]='*' [lon]='*' [radius]='*' [Options]='*'>
                </circle-element>
            </leaf-element>
            
            




            `
        }
        if(type==="cp"){
            return `
            <leaf-element [x]=$ [y]=$ [zoom]=* [minZoom]=* [layerControl]=*
             [crs]='*' [layerControl]=*>
                <layer-element [name]="*" [type]="'basemap'" [wmsLayer]="*">
                </layer-element>
                <circle-element [x]=$ [y]=$ [mouseover]="*"></circle-element>
                <polygon-element [xys]="[[$], [$], [$], [$]]" [onclick]="*">
                </polygon-element>
                <coordinate-control [crs]='system'></coordinate-control>
                <leaflet-group [name]="*">
                    <geojson-element [geojson]=*></geojson-element>
                </leaflet-group>
        </leaf-element>`
        }

        if(type === "rnd"){
            return `
            <leaf-element [zoom]=11 [layerControl]=true>
                <layer-element [name]="*" [type]="'basemap'" [slippyLayer]="*">
                </layer-element>
                <leaflet-group>
                    <circle-element *ngFor="let *; of:*;" [lat]='*' [lon]='*'>
                    </circle-element>
                    <polyline-element [latlngs]="*" [Options]="*">
                    </polyline-element>
                </leaflet-group>
            </leaf-element>

            `;
        }
    }
}