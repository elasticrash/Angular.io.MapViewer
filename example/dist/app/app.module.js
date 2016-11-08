"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require('@angular/material');
var app_component_1 = require('./components/app.component');
var app_component_1_1 = require('./components/app.component.1');
var app_component_2_1 = require('./components/app.component.2');
var toolbar_element_1 = require('./components/toolbar.element');
var angular2_leaflet_components_1 = require('angular2.leaflet.components');
var angular2_leaflet_components_2 = require('angular2.leaflet.components');
var router_1 = require('@angular/router');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, material_1.MaterialModule.forRoot(),
                router_1.RouterModule.forRoot([
                    { path: 'mm-map', component: app_component_1_1.AppComponent1 },
                    { path: '', component: app_component_2_1.AppComponent2 },
                ]),
            ],
            declarations: [app_component_1.AppComponent, app_component_1_1.AppComponent1, app_component_2_1.AppComponent2, toolbar_element_1.ToolbarElement, angular2_leaflet_components_1.CandTLeafletComponent],
            providers: [angular2_leaflet_components_2.CandTLeafletService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map