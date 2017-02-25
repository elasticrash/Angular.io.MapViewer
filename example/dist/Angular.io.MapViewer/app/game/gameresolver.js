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
var Rx_1 = require('rxjs/Rx');
var http_1 = require('@angular/http');
var TransactionResolver = (function () {
    function TransactionResolver(http) {
        this.http = http;
    }
    TransactionResolver.prototype.resolve = function (route) {
        return this.getGeoJson();
    };
    TransactionResolver.prototype.getGeoJson = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({
            responseType: http_1.ResponseContentType.Blob,
            headers: headers
        });
        return this.http.get("./countries.json", options)
            .map(function (res) { return res; })
            .catch(function (error) { return Rx_1.Observable.throw('Server error'); });
    };
    TransactionResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TransactionResolver);
    return TransactionResolver;
}());
exports.TransactionResolver = TransactionResolver;
//# sourceMappingURL=gameresolver.js.map