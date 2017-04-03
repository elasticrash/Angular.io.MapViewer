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
var router_1 = require('@angular/router');
var AppComponent4 = (function () {
    function AppComponent4(route) {
        this.route = route;
    }
    AppComponent4.prototype.ngOnInit = function () {
        this.countries = this.route.snapshot.data['countries'];
    };
    AppComponent4 = __decorate([
        core_1.Component({
            selector: 'my-mmapp',
            templateUrl: 'app/templates/app.component.4.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], AppComponent4);
    return AppComponent4;
}());
exports.AppComponent4 = AppComponent4;
//# sourceMappingURL=app.component.4.js.map