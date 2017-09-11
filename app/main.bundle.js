webpackJsonp(["main"],{

/***/ "../../../../../../Angular2.leaflet.component/circle/circle.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/circle/circle.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/circle/circle.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var group_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/group/group.ts");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var group_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/group.service.ts");
var popup_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/popup.service.ts");
var coodinateHandler_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/helpers/coodinateHandler.ts");
var path_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/models/path.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var CircleElement = /** @class */ (function (_super) {
    __extends(CircleElement, _super);
    function CircleElement(mapService, groupService, popupService, elementText, LeafletElement, LeafletGroup) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.groupService = groupService;
        _this.popupService = popupService;
        _this.elementText = elementText;
        _this.LeafletElement = LeafletElement;
        _this.LeafletGroup = LeafletGroup;
        _this.lat = 52.6;
        _this.lon = -1.1;
        _this.radius = 20;
        _this.mouseover = undefined;
        _this.onclick = undefined;
        _this.Options = new path_1.path(null);
        _this.circle = null;
        return _this;
    }
    CircleElement.prototype.ngOnInit = function () {
        _super.prototype.assignCartesianPointToLeafletsLatLngSchema.call(this);
        //check if any of the two optional injections exist
        if (this.LeafletElement || this.LeafletGroup) {
            var inheritedOptions = new path_1.path(this.Options);
            var map = this.mapService.getMap();
            _super.prototype.transformPointCoordinates.call(this, this.LeafletElement.crs);
            this.circle = L.circle([this.lat, this.lon], this.radius, inheritedOptions);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(this.circle, map, this.mapService, this.LeafletGroup);
            }
            else {
                this.circle.addTo(map);
            }
        }
        else {
            console.warn("This circle-element will not be rendered \n the expected parent node of circle-element should be either leaf-element or leaflet-group");
        }
    };
    CircleElement.prototype.ngAfterViewInit = function () {
        if (this.LeafletElement || this.LeafletGroup) {
            var textInput = undefined;
            if (this.elementText.nativeElement.childNodes.length > 0) {
                var textNode = this.elementText.nativeElement.childNodes[0];
                textInput = textNode.nodeValue;
            }
            //add popup methods on element
            this.popupService.enablePopup(this.mouseover, this.onclick, this.circle, textInput);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CircleElement.prototype, "lat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CircleElement.prototype, "lon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CircleElement.prototype, "radius", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CircleElement.prototype, "mouseover", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CircleElement.prototype, "onclick", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircleElement.prototype, "Options", void 0);
    CircleElement = __decorate([
        core_1.Component({
            selector: 'circle-element',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/circle/circle.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/circle/circle.css")]
        }),
        __param(4, core_1.Optional()),
        __param(5, core_1.Optional()),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object, typeof (_b = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" && _b || Object, typeof (_c = typeof popup_service_1.PopupService !== "undefined" && popup_service_1.PopupService) === "function" && _c || Object, typeof (_d = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _d || Object, typeof (_e = typeof map_1.LeafletElement !== "undefined" && map_1.LeafletElement) === "function" && _e || Object, typeof (_f = typeof group_1.LeafletGroup !== "undefined" && group_1.LeafletGroup) === "function" && _f || Object])
    ], CircleElement);
    return CircleElement;
    var _a, _b, _c, _d, _e, _f;
}(coodinateHandler_1.CoordinateHandler));
exports.CircleElement = CircleElement;
//# sourceMappingURL=circle.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/circlemarker/circlemarker.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/circlemarker/circlemarker.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/circlemarker/circlemarker.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var group_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/group/group.ts");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var group_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/group.service.ts");
var popup_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/popup.service.ts");
var coodinateHandler_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/helpers/coodinateHandler.ts");
var path_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/models/path.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var CircleMarkerElement = /** @class */ (function (_super) {
    __extends(CircleMarkerElement, _super);
    function CircleMarkerElement(mapService, groupService, popupService, elementText, LeafletElement, LeafletGroup) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.groupService = groupService;
        _this.popupService = popupService;
        _this.elementText = elementText;
        _this.LeafletElement = LeafletElement;
        _this.LeafletGroup = LeafletGroup;
        _this.lat = 52.6;
        _this.lon = -1.1;
        _this.mouseover = undefined;
        _this.onclick = undefined;
        _this.Options = new path_1.path(null);
        _this.circle = null;
        return _this;
    }
    CircleMarkerElement.prototype.ngOnInit = function () {
        _super.prototype.assignCartesianPointToLeafletsLatLngSchema.call(this);
        //check if any of the two optional injections exist
        if (this.LeafletElement || this.LeafletGroup) {
            var inheritedOptions = new path_1.path(this.Options);
            var map = this.mapService.getMap();
            var elementPosition = _super.prototype.transformPointCoordinates.call(this, this.LeafletElement.crs);
            this.circle = L.circleMarker([this.lat, this.lon], inheritedOptions);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(this.circle, map, this.mapService, this.LeafletGroup);
            }
            else {
                this.circle.addTo(map);
            }
        }
        else {
            console.warn("This circle-element will not be rendered \n the expected parent node of circle-element should be either leaf-element or leaflet-group");
        }
    };
    CircleMarkerElement.prototype.ngAfterViewInit = function () {
        var textInput = undefined;
        if (this.elementText.nativeElement.childNodes.length > 0) {
            var textNode = this.elementText.nativeElement.childNodes[0];
            textInput = textNode.nodeValue;
        }
        //add popup methods on element
        this.popupService.enablePopup(this.mouseover, this.onclick, this.circle, textInput);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CircleMarkerElement.prototype, "lat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CircleMarkerElement.prototype, "lon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CircleMarkerElement.prototype, "mouseover", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CircleMarkerElement.prototype, "onclick", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CircleMarkerElement.prototype, "Options", void 0);
    CircleMarkerElement = __decorate([
        core_1.Component({
            selector: 'circle-marker-element',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/circlemarker/circlemarker.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/circlemarker/circlemarker.css")]
        }),
        __param(4, core_1.Optional()),
        __param(5, core_1.Optional()),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object, typeof (_b = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" && _b || Object, typeof (_c = typeof popup_service_1.PopupService !== "undefined" && popup_service_1.PopupService) === "function" && _c || Object, typeof (_d = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _d || Object, typeof (_e = typeof map_1.LeafletElement !== "undefined" && map_1.LeafletElement) === "function" && _e || Object, typeof (_f = typeof group_1.LeafletGroup !== "undefined" && group_1.LeafletGroup) === "function" && _f || Object])
    ], CircleMarkerElement);
    return CircleMarkerElement;
    var _a, _b, _c, _d, _e, _f;
}(coodinateHandler_1.CoordinateHandler));
exports.CircleMarkerElement = CircleMarkerElement;
//# sourceMappingURL=circlemarker.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/geojson/geojson.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/geojson/geojson.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/geojson/geojson.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var group_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/group/group.ts");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var group_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/group.service.ts");
var popup_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/popup.service.ts");
var globalId_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/globalId.service.ts");
var helper_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/helper.service.ts");
var geoJsonReader_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/helpers/geoJsonReader.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var GeoJsonElement = /** @class */ (function (_super) {
    __extends(GeoJsonElement, _super);
    function GeoJsonElement(mapService, groupService, popupService, guidService, helperService, LeafletElement, LeafletGroup) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.groupService = groupService;
        _this.popupService = popupService;
        _this.guidService = guidService;
        _this.helperService = helperService;
        _this.LeafletElement = LeafletElement;
        _this.LeafletGroup = LeafletGroup;
        _this.originalObject = Object.assign({}, _this.geojson);
        _this.globalId = _this.guidService.newGuid();
        return _this;
    }
    GeoJsonElement.prototype.ngOnInit = function () {
        //check if any of the two optional injections exist
        if (this.LeafletElement || this.LeafletGroup) {
            //polyline shouldn't have a fill
            var map = this.mapService.getMap();
            if (this.geojson) {
                _super.prototype.transformJSONCoordinates.call(this, this.geojson, this.LeafletElement.crs);
                var gjson = L.geoJSON(this.geojson);
                if (this.LeafletGroup) {
                    this.groupService.addOLayersToGroup(gjson, map, this.mapService, this.LeafletGroup, false, this.globalId);
                }
                else {
                    gjson.addTo(map);
                }
            }
            else {
                console.warn("geojson object seems to be undefined");
            }
        }
        else {
            console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
        }
    };
    GeoJsonElement.prototype.ngDoCheck = function () {
        var map = this.mapService.getMap();
    };
    GeoJsonElement = __decorate([
        core_1.Component({
            selector: 'geojson-element',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/geojson/geojson.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/geojson/geojson.css")]
        }),
        __param(5, core_1.Optional()),
        __param(6, core_1.Optional()),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object, typeof (_b = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" && _b || Object, typeof (_c = typeof popup_service_1.PopupService !== "undefined" && popup_service_1.PopupService) === "function" && _c || Object, typeof (_d = typeof globalId_service_1.GuidService !== "undefined" && globalId_service_1.GuidService) === "function" && _d || Object, typeof (_e = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _e || Object, typeof (_f = typeof map_1.LeafletElement !== "undefined" && map_1.LeafletElement) === "function" && _f || Object, typeof (_g = typeof group_1.LeafletGroup !== "undefined" && group_1.LeafletGroup) === "function" && _g || Object])
    ], GeoJsonElement);
    return GeoJsonElement;
    var _a, _b, _c, _d, _e, _f, _g;
}(geoJsonReader_1.GeoJSONCoordinateHandler));
exports.GeoJsonElement = GeoJsonElement;
//# sourceMappingURL=geojson.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/group/group.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/group/group.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/group/group.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var group_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/group.service.ts");
var globalId_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/globalId.service.ts");
var LeafletGroup = /** @class */ (function () {
    function LeafletGroup(mapService, groupService, guidService) {
        this.mapService = mapService;
        this.groupService = groupService;
        this.guidService = guidService;
        this.name = '';
        this.globalId = this.guidService.newGuid();
    }
    LeafletGroup.prototype.ngOnInit = function () {
    };
    LeafletGroup.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LeafletGroup.prototype, "name", void 0);
    LeafletGroup = __decorate([
        core_1.Component({
            selector: 'leaflet-group',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/group/group.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/group/group.css")],
            providers: [group_service_1.GroupService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object, typeof (_b = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" && _b || Object, typeof (_c = typeof globalId_service_1.GuidService !== "undefined" && globalId_service_1.GuidService) === "function" && _c || Object])
    ], LeafletGroup);
    return LeafletGroup;
    var _a, _b, _c;
}());
exports.LeafletGroup = LeafletGroup;
//# sourceMappingURL=group.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/helpers/coodinateHandler.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var CoordinateHandler = /** @class */ (function () {
    function CoordinateHandler() {
    }
    CoordinateHandler.prototype.assignCartesianPointToLeafletsLatLngSchema = function () {
        if (this.x !== undefined) {
            this.lon = this.x;
        }
        if (this.y !== undefined) {
            this.lat = this.y;
        }
    };
    CoordinateHandler.prototype.assignCartesianArrayToLeafletsLatLngSchema = function (arr) {
        if (this.xys !== undefined) {
            if (!arr) {
                arr = this.xys;
            }
            for (var i = 0; i < arr.length; i++) {
                if (typeof (arr[0]) !== "number") {
                    this.assignCartesianArrayToLeafletsLatLngSchema(arr[i]);
                }
                else {
                    arr.reverse();
                }
            }
            this.latlngs = this.xys;
        }
    };
    CoordinateHandler.prototype.transformPointCoordinates = function (crs) {
        /**
         * this is because leaflet default CRS is 3857 (so it can render wms properly)
         * but uses 4326 everywhere else so if CRS is 3857 don't reproject coordinates
         * also proj4 by default unprojects (inverse) to wgs84 (4326) which is handy but
         * doesnt match leaflet's default projection. Generally I don't really agree on
         * how leaflet doesn't handle projections on a global state
         */
        if (crs.code && crs.code !== "EPSG:3857") {
            var newlatlng = crs.unproject({ y: this.lat, x: this.lon });
            this.setNewLatLng(newlatlng);
        }
        else {
            var newlatlng = { lat: this.lat, lng: this.lon };
            this.setNewLatLng(newlatlng);
        }
    };
    CoordinateHandler.prototype.setNewLatLng = function (newlatlng) {
        this.lat = newlatlng.lat;
        this.lon = newlatlng.lng;
    };
    CoordinateHandler.prototype.transformArrayCoordinates = function (crs, arr) {
        if (!arr) {
            arr = this.latlngs;
        }
        for (var i = 0; i < arr.length; i++) {
            if (typeof (arr[0]) !== "number") {
                arr[i] = this.transformArrayCoordinates(crs, arr[i]);
            }
            else {
                if (crs.code && crs.code !== "EPSG:3857") {
                    var trasformed = crs.unproject({ x: arr[0], y: arr[1] });
                    arr = { lat: trasformed.lat, lng: trasformed.lng };
                }
                else {
                    arr = { lat: arr[0], lng: arr[1] };
                }
            }
        }
        return arr;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CoordinateHandler.prototype, "lat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CoordinateHandler.prototype, "lon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CoordinateHandler.prototype, "x", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CoordinateHandler.prototype, "y", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CoordinateHandler.prototype, "latlngs", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CoordinateHandler.prototype, "xys", void 0);
    return CoordinateHandler;
}());
exports.CoordinateHandler = CoordinateHandler;
//# sourceMappingURL=coodinateHandler.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/helpers/geoJsonReader.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var GeoJSONCoordinateHandler = /** @class */ (function () {
    function GeoJSONCoordinateHandler() {
        this.geojson = {};
    }
    GeoJSONCoordinateHandler.prototype.transformJSONCoordinates = function (geoJSON, crs) {
        var _this = this;
        /**
         * 7.  GeoJSON Types Are Not Extensible
         * Implementations MUST NOT extend the fixed set of GeoJSON types:
         * FeatureCollection, Feature, Point, LineString, MultiPoint, Polygon,
         * MultiLineString, MultiPolygon, and GeometryCollection.
         */
        if (geoJSON.type === "FeatureCollection") {
            var featureCollection = geoJSON;
            featureCollection.features.forEach(function (feature) {
                _this.transformJSONCoordinates(feature, crs);
            });
        }
        if (geoJSON.type === "Feature") {
            var feature = geoJSON;
            this.transformJSONCoordinates(feature.geometry, crs);
        }
        if (geoJSON.type === "Point") {
            var point = geoJSON;
            point = this.transformPointCoordinates(point.coordinates, crs);
        }
        if (geoJSON.type === "LineString") {
            var lineString = geoJSON;
            lineString.coordinates.forEach(function (point) {
                _this.transformPointCoordinates(point, crs);
            });
        }
        if (geoJSON.type === "MultiPoint") {
            var multiPoint = geoJSON;
            multiPoint.coordinates.forEach(function (point) {
                _this.transformPointCoordinates(point, crs);
            });
        }
        if (geoJSON.type === "Polygon") {
            var polygon = geoJSON;
            polygon.coordinates.forEach(function (polygonElement) {
                polygonElement.forEach(function (point) {
                    _this.transformPointCoordinates(point, crs);
                });
            });
        }
        if (geoJSON.type === "MultiLineString") {
            var multiLineString = geoJSON;
            multiLineString.coordinates.forEach(function (lineString) {
                lineString.forEach(function (point) {
                    _this.transformPointCoordinates(point, crs);
                });
            });
        }
        if (geoJSON.type === "MultiPolygon") {
            var multiPolygon = geoJSON;
            multiPolygon.coordinates.forEach(function (polygon) {
                polygon.forEach(function (polygonElement) {
                    polygonElement.forEach(function (point) {
                        _this.transformPointCoordinates(point, crs);
                    });
                });
            });
        }
        if (geoJSON.type === "GeometryCollection") {
            var geometryCollection = geoJSON;
            geometryCollection.geometries.forEach(function (geometry) {
                _this.transformJSONCoordinates(geometry, crs);
            });
        }
    };
    GeoJSONCoordinateHandler.prototype.transformPointCoordinates = function (point, crs) {
        /**
         * this is because leaflet default CRS is 3857 (so it can render wms properly)
         * but uses 4326 everywhere else so if CRS is 3857 don't reproject coordinates
         * also proj4 by default unprojects (inverse) to wgs84 (4326) which is handy but
         * doesnt match leaflet's default projection. Generally I don't really agree on
         * how leaflet doesn't handle projections on a global state
         */
        if (crs.code && crs.code !== "EPSG:3857") {
            var newlatlng = crs.unproject({ x: point[0], y: point[1] });
            point[1] = newlatlng.lat;
            point[0] = newlatlng.lng;
            return point;
        }
        else {
            return point;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GeoJSONCoordinateHandler.prototype, "geojson", void 0);
    return GeoJSONCoordinateHandler;
}());
exports.GeoJSONCoordinateHandler = GeoJSONCoordinateHandler;
//# sourceMappingURL=geoJsonReader.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/imageoverlay/image-overlay.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/imageoverlay/image-overlay.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/imageoverlay/image-overlay.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var coodinateHandler_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/helpers/coodinateHandler.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var ImageOverlayElement = /** @class */ (function (_super) {
    __extends(ImageOverlayElement, _super);
    function ImageOverlayElement(mapService, LeafletElement) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.LeafletElement = LeafletElement;
        _this.bounds = [[-26.5, -25], [1021.5, 1023]];
        _this.imagepath = '';
        _this.name = '';
        _this.opacity = 1;
        _this.type = 'overlay';
        return _this;
    }
    ImageOverlayElement.prototype.ngOnInit = function () {
        this.latlngs = this.bounds;
        if (this.LeafletElement) {
            var map = this.mapService.getMap();
            _super.prototype.transformArrayCoordinates.call(this, this.LeafletElement.crs);
            var layer = null;
            layer = L.imageOverlay(this.imagepath, this.bounds).setOpacity(this.opacity);
            if (layer !== {}) {
                if (this.type === "overlay") {
                    this.mapService.addOverlay(layer, this.name);
                    layer.addTo(map);
                }
                else if (this.type === "basemap") {
                    this.mapService.addBasemap(layer, this.name);
                }
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ImageOverlayElement.prototype, "bounds", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ImageOverlayElement.prototype, "imagepath", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ImageOverlayElement.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ImageOverlayElement.prototype, "opacity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ImageOverlayElement.prototype, "type", void 0);
    ImageOverlayElement = __decorate([
        core_1.Component({
            selector: 'image-overlay-element',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/imageoverlay/image-overlay.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/imageoverlay/image-overlay.css")]
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object, typeof (_b = typeof map_1.LeafletElement !== "undefined" && map_1.LeafletElement) === "function" && _b || Object])
    ], ImageOverlayElement);
    return ImageOverlayElement;
    var _a, _b;
}(coodinateHandler_1.CoordinateHandler));
exports.ImageOverlayElement = ImageOverlayElement;
//# sourceMappingURL=image-overlay.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var attribution_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/attribution/attribution.ts");
var scale_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/scale/scale.ts");
var zoom_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/zoom/zoom.ts");
var watermark_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/watermark/watermark.ts");
var layer_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/layer/layer.ts");
var image_overlay_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/imageoverlay/image-overlay.ts");
var marker_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/marker/marker.ts");
var circle_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/circle/circle.ts");
var circlemarker_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/circlemarker/circlemarker.ts");
var polygon_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/polygon/polygon.ts");
var polyline_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/polyline/polyline.ts");
var geojson_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/geojson/geojson.ts");
var popup_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/popup/popup.ts");
var group_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/group/group.ts");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var group_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/group.service.ts");
var popup_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/popup.service.ts");
var globalId_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/globalId.service.ts");
var helper_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/helper.service.ts");
exports.CandTLeafletComponent = [
    //map and controls
    map_1.LeafletElement,
    attribution_1.AttributionControl,
    scale_1.ScaleControl,
    zoom_1.ZoomControl,
    watermark_1.WatermarkControl,
    //layers and vectors
    layer_1.LayerElement,
    image_overlay_1.ImageOverlayElement,
    marker_1.MarkerElement,
    circle_1.CircleElement,
    circlemarker_1.CircleMarkerElement,
    polygon_1.PolygonElement,
    polyline_1.PolylineElement,
    geojson_1.GeoJsonElement,
    popup_1.PopupElement,
    //rest
    group_1.LeafletGroup
];
exports.CandTLeafletService = [map_service_1.MapService,
    group_service_1.GroupService,
    popup_service_1.PopupService,
    globalId_service_1.GuidService,
    helper_service_1.HelperService];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/interfaces/path.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=path.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/layer/layer.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/layer/layer.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/layer/layer.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var LayerElement = /** @class */ (function () {
    function LayerElement(mapService) {
        this.mapService = mapService;
        this.slippyLayer = '';
        this.wmsLayer = '';
        this.name = '';
        this.opacity = 1;
        this.type = 'overlay';
        this.attribution = null;
    }
    LayerElement.prototype.ngOnInit = function () {
        this.mapService.increaseNumber();
        var map = this.mapService.getMap();
        var layer = null;
        if (this.slippyLayer !== "") {
            layer = L.tileLayer(this.slippyLayer, {
                attribution: this.attribution,
            });
        }
        if (this.wmsLayer !== "" && this.name !== "") {
            layer = L.tileLayer.wms(this.wmsLayer, {
                layers: this.name,
                attribution: this.attribution
            }).setOpacity(this.opacity);
        }
        if (layer !== {}) {
            if (this.type === "overlay") {
                this.mapService.addOverlay(layer, this.name);
                layer.addTo(map);
            }
            else if (this.type === "basemap") {
                this.mapService.addBasemap(layer, this.name);
                layer.addTo(map);
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LayerElement.prototype, "slippyLayer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LayerElement.prototype, "wmsLayer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LayerElement.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LayerElement.prototype, "opacity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LayerElement.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LayerElement.prototype, "attribution", void 0);
    LayerElement = __decorate([
        core_1.Component({
            selector: 'layer-element',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/layer/layer.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/layer/layer.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object])
    ], LayerElement);
    return LayerElement;
    var _a;
}());
exports.LayerElement = LayerElement;
//# sourceMappingURL=layer.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/attribution/attribution.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/attribution/attribution.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/attribution/attribution.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var attributionModel_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/models/attributionModel.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var AttributionControl = /** @class */ (function () {
    function AttributionControl(mapService, LeafletElement) {
        this.mapService = mapService;
        this.LeafletElement = LeafletElement;
        this.Options = new attributionModel_1.attributionModel(null);
    }
    AttributionControl.prototype.ngOnInit = function () {
        if (this.LeafletElement) {
            var map = this.mapService.getMap();
            L.control.attribution(this.Options).addTo(map);
        }
        else {
            console.warn("This attribution-control will not be rendered \n the expected parent node of attribution-control should be either leaf-element or layer-element");
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AttributionControl.prototype, "Options", void 0);
    AttributionControl = __decorate([
        core_1.Component({
            selector: 'attribution-control',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/map/attribution/attribution.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/map/attribution/attribution.css")]
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object, typeof (_b = typeof map_1.LeafletElement !== "undefined" && map_1.LeafletElement) === "function" && _b || Object])
    ], AttributionControl);
    return AttributionControl;
    var _a, _b;
}());
exports.AttributionControl = AttributionControl;
//# sourceMappingURL=attribution.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/map.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n    height:100%;\n}\n\n:host .map-container {\n    position: absolute;    \n    display: block;\n\ttop: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tbottom: 0px;\n}\n\nleaf-element{\n    width:100%;\n}\n\n.leaflet-pane {\n    z-index: 0 !important;\n}\n\n.leaflet-bottom.leaflet-left {\n    z-index: 1 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/map.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-background map-container\" layout-padding>\n\t<div #map></div>\n</div>"

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/map.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var coodinateHandler_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/helpers/coodinateHandler.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var LeafletElement = /** @class */ (function (_super) {
    __extends(LeafletElement, _super);
    function LeafletElement(mapService) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.lat = 52.6;
        _this.lon = -1.1;
        _this.zoom = 12;
        _this.minZoom = 4;
        _this.maxZoom = 19;
        _this.layerControl = false;
        _this.crs = L.CRS.EPSG3857;
        _this.maxBounds = null;
        _this.layerControlObject = null;
        return _this;
    }
    LeafletElement.prototype.ngOnInit = function () {
        _super.prototype.assignCartesianPointToLeafletsLatLngSchema.call(this);
        if (typeof (this.crs) === "string") {
            var splitCrs = this.crs.split(".");
            if (splitCrs[0] === "L") {
                this.crs = L[splitCrs[1]][splitCrs[2]];
            }
            else {
                console.warn("something is not right, reverting to default EPSG3857");
                this.crs = L.CRS.EPSG3857;
            }
        }
        _super.prototype.transformPointCoordinates.call(this, this.crs);
        var map = L.map(this.mapElement.nativeElement, {
            crs: this.crs,
            zoomControl: this.zoomControl,
            center: L.latLng(this.lat, this.lon),
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            maxBounds: this.maxBounds,
            layers: [],
            closePopupOnClick: false,
            attributionControl: false
        });
        this.mapElement.nativeElement.myMapProperty = map;
        //set variables for childrent components
        this.mapService.setMap(map);
        this.mapService.setLayerControl(this.layerControl);
    };
    LeafletElement.prototype.ngAfterViewInit = function () {
    };
    LeafletElement.prototype.setLayerControl = function () {
        if (this.layerControl) {
            var map = this.mapService.getMap();
            if (this.layerControlObject !== null) {
                this.layerControlObject.getContainer().innerHTML = '';
            }
            this.layerControlObject = L.control.layers(this.mapService.getBasemaps(), this.mapService.getOverlays()).addTo(map);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LeafletElement.prototype, "lat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LeafletElement.prototype, "lon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LeafletElement.prototype, "zoom", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LeafletElement.prototype, "minZoom", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LeafletElement.prototype, "maxZoom", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LeafletElement.prototype, "layerControl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LeafletElement.prototype, "crs", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], LeafletElement.prototype, "zoomControl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = (typeof L !== "undefined" && L).LatLngBounds) === "function" && _a || Object)
    ], LeafletElement.prototype, "maxBounds", void 0);
    __decorate([
        core_1.ViewChild('map'),
        __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
    ], LeafletElement.prototype, "mapElement", void 0);
    LeafletElement = __decorate([
        core_1.Component({
            selector: 'leaf-element',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/map/map.css")],
            providers: [map_service_1.MapService]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _c || Object])
    ], LeafletElement);
    return LeafletElement;
    var _a, _b, _c;
}(coodinateHandler_1.CoordinateHandler));
exports.LeafletElement = LeafletElement;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/scale/scale.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/scale/scale.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/scale/scale.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var scaleModel_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/models/scaleModel.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var ScaleControl = /** @class */ (function () {
    function ScaleControl(mapService, LeafletElement) {
        this.mapService = mapService;
        this.LeafletElement = LeafletElement;
        this.Options = new scaleModel_1.scaleModel(null);
    }
    ScaleControl.prototype.ngOnInit = function () {
        if (this.LeafletElement) {
            var map = this.mapService.getMap();
            L.control.scale(this.Options).addTo(map);
        }
        else {
            console.warn("This scale-control will not be rendered \n the expected parent node of scale-control should be leaf-element");
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ScaleControl.prototype, "Options", void 0);
    ScaleControl = __decorate([
        core_1.Component({
            selector: 'scale-control',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/map/scale/scale.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/map/scale/scale.css")]
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object, typeof (_b = typeof map_1.LeafletElement !== "undefined" && map_1.LeafletElement) === "function" && _b || Object])
    ], ScaleControl);
    return ScaleControl;
    var _a, _b;
}());
exports.ScaleControl = ScaleControl;
//# sourceMappingURL=scale.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/watermark/watermark.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/watermark/watermark.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/watermark/watermark.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var WatermarkControl = /** @class */ (function () {
    function WatermarkControl(mapService, LeafletElement) {
        this.mapService = mapService;
        this.LeafletElement = LeafletElement;
    }
    WatermarkControl.prototype.ngOnInit = function () {
        var self = this;
        if (this.LeafletElement) {
            var map = this.mapService.getMap();
            if (this.url) {
                L.Control['Watermark'] = {};
                L.Control['Watermark'] = L.Control.extend({
                    onAdd: function (map) {
                        var basediv = L.DomUtil.create('div', 'watermark');
                        var howManyInX = Math.ceil(map.getSize().x / self.imagewidth);
                        var howManyInY = Math.ceil(map.getSize().y / self.imageheight);
                        var numberOfLogo = howManyInX * howManyInY;
                        console.log(numberOfLogo);
                        var i = 0;
                        for (i; i < numberOfLogo; i++) {
                            var img = L.DomUtil.create('img', 'watermark-elements', basediv);
                            img.src = self.url;
                            img.style.width = self.imagewidth + 'px';
                        }
                        return basediv;
                    },
                    onRemove: function (map) {
                    }
                });
                L.control['watermark'] = function (opts) {
                    return new L.Control['Watermark'](opts);
                };
            }
            L.control['watermark']({ position: "bottomleft" }).addTo(map);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WatermarkControl.prototype, "url", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], WatermarkControl.prototype, "imagewidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], WatermarkControl.prototype, "imageheight", void 0);
    WatermarkControl = __decorate([
        core_1.Component({
            selector: 'watermark-element',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/map/watermark/watermark.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/map/watermark/watermark.css")]
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object, typeof (_b = typeof map_1.LeafletElement !== "undefined" && map_1.LeafletElement) === "function" && _b || Object])
    ], WatermarkControl);
    return WatermarkControl;
    var _a, _b;
}());
exports.WatermarkControl = WatermarkControl;
//# sourceMappingURL=watermark.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/zoom/zoom.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/zoom/zoom.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/map/zoom/zoom.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var zoomModel_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/models/zoomModel.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var ZoomControl = /** @class */ (function () {
    function ZoomControl(mapService, LeafletElement) {
        this.mapService = mapService;
        this.LeafletElement = LeafletElement;
        this.Options = new zoomModel_1.zoomModel(null);
    }
    ZoomControl.prototype.ngOnInit = function () {
        if (this.LeafletElement) {
            var map = this.mapService.getMap();
            L.control.zoom(this.Options).addTo(map);
        }
        else {
            console.warn("This zoom-control will not be rendered \n the expected parent node of zoom-control should be leaf-element");
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ZoomControl.prototype, "Options", void 0);
    ZoomControl = __decorate([
        core_1.Component({
            selector: 'zoom-control',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/map/zoom/zoom.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/map/zoom/zoom.css")]
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object, typeof (_b = typeof map_1.LeafletElement !== "undefined" && map_1.LeafletElement) === "function" && _b || Object])
    ], ZoomControl);
    return ZoomControl;
    var _a, _b;
}());
exports.ZoomControl = ZoomControl;
//# sourceMappingURL=zoom.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/marker/marker.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/marker/marker.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/marker/marker.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var group_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/group.service.ts");
var popup_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/popup.service.ts");
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var group_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/group/group.ts");
var coodinateHandler_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/helpers/coodinateHandler.ts");
var Rx_1 = __webpack_require__("../../../../rxjs/Rx.js");
__webpack_require__("../../../../rxjs/add/operator/map.js");
__webpack_require__("../../../../rxjs/add/operator/catch.js");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var MarkerElement = /** @class */ (function (_super) {
    __extends(MarkerElement, _super);
    function MarkerElement(mapService, groupService, popupService, http, elementText, LeafletElement, LeafletGroup) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.groupService = groupService;
        _this.popupService = popupService;
        _this.http = http;
        _this.elementText = elementText;
        _this.LeafletElement = LeafletElement;
        _this.LeafletGroup = LeafletGroup;
        _this.lat = 52.6;
        _this.lon = -1.1;
        _this.mouseover = undefined;
        _this.onclick = undefined;
        _this.iconUrl = "";
        _this.marker = null;
        return _this;
    }
    MarkerElement.prototype.ngOnInit = function () {
        _super.prototype.assignCartesianPointToLeafletsLatLngSchema.call(this);
        var model = this;
        if (this.LeafletElement || this.LeafletGroup) {
            var map_2 = this.mapService.getMap();
            _super.prototype.transformPointCoordinates.call(this, this.LeafletElement.crs);
            if (this.iconUrl === "") {
                this.marker = L.marker([this.lat, this.lon]);
                this.createMarkerlayer(this.marker, map_2);
            }
            else {
                this.imageExists(this.iconUrl, function (exists) {
                    model.getImage().subscribe(function (image) {
                        var img = document.createElement("img");
                        window.URL.createObjectURL(image.blob());
                        var reader = new FileReader();
                        reader.onload = function () {
                            img.src = reader.result;
                            var myIcon = L.icon({
                                iconUrl: model.iconUrl,
                                iconSize: [img.width, img.height],
                                iconAnchor: [img.width / 2, img.height - 1],
                                popupAnchor: [0, -img.height]
                            });
                            var obj = { icon: myIcon, options: null };
                            model.marker = L.marker([model.lat, model.lon], obj);
                            model.createMarkerlayer(model.marker, map_2);
                        };
                        reader.readAsDataURL(image.blob());
                    }, function (err) {
                        console.log(err);
                    });
                });
            }
        }
        else {
            console.warn("This marker-element will not be rendered \n the expected parent node of marker-element should be either leaf-element or leaflet-group");
        }
    };
    MarkerElement.prototype.createMarkerlayer = function (marker, map) {
        var textInput = undefined;
        if (this.elementText.nativeElement.childNodes.length > 0) {
            var textNode = this.elementText.nativeElement.childNodes[0];
            textInput = textNode.nodeValue;
        }
        //add popup methods on element
        this.popupService.enablePopup(this.mouseover, this.onclick, this.marker, textInput);
        //only if the parent is map should the marker-element should be directly added to the map
        if (this.LeafletGroup) {
            this.groupService.addOLayersToGroup(marker, map, this.mapService, this.LeafletGroup);
        }
        else {
            marker.addTo(map);
        }
    };
    MarkerElement.prototype.imageExists = function (url, callback) {
        var img = new Image();
        img.onload = function () { callback(true); };
        img.onerror = function () { callback(false); };
        img.src = url;
    };
    MarkerElement.prototype.getImage = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({
            responseType: http_1.ResponseContentType.Blob,
            headers: headers
        });
        return this.http.get(this.iconUrl, options)
            .map(function (res) { return res; })
            .catch(function (error) { return Rx_1.Observable.throw('Server error'); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MarkerElement.prototype, "lat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MarkerElement.prototype, "lon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MarkerElement.prototype, "mouseover", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MarkerElement.prototype, "onclick", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MarkerElement.prototype, "iconUrl", void 0);
    MarkerElement = __decorate([
        core_1.Component({
            selector: 'marker-element',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/marker/marker.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/marker/marker.css")],
            providers: [popup_service_1.PopupService]
        }),
        __param(5, core_1.Optional()),
        __param(6, core_1.Optional()),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object, typeof (_b = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" && _b || Object, typeof (_c = typeof popup_service_1.PopupService !== "undefined" && popup_service_1.PopupService) === "function" && _c || Object, typeof (_d = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _d || Object, typeof (_e = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _e || Object, typeof (_f = typeof map_1.LeafletElement !== "undefined" && map_1.LeafletElement) === "function" && _f || Object, typeof (_g = typeof group_1.LeafletGroup !== "undefined" && group_1.LeafletGroup) === "function" && _g || Object])
    ], MarkerElement);
    return MarkerElement;
    var _a, _b, _c, _d, _e, _f, _g;
}(coodinateHandler_1.CoordinateHandler));
exports.MarkerElement = MarkerElement;
//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/models/attributionModel.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var attributionModel = /** @class */ (function () {
    function attributionModel(options) {
        this.prefix = "Leaflet"; //The HTML text shown before the attributions. Pass false to disable.
        this.position = "bottomright"; //The position of the control (one of the map corners). Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
        if (options !== null) {
            for (var key in options) {
                if (options[key] !== undefined) {
                    this[key] = options[key];
                }
            }
        }
    }
    return attributionModel;
}());
exports.attributionModel = attributionModel;
//# sourceMappingURL=attributionModel.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/models/path.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var path = /** @class */ (function () {
    function path(pathInfo) {
        this.stroke = true; //Whether to draw stroke along the path. Set it to false to disable borders on polygons or circles.
        this.color = '#3388ff'; //Stroke color
        this.weight = 3; //Stroke width in pixels
        this.opacity = 1; //Stroke opacity
        this.lineCap = 'round'; //	A string that defines shape to be used at the end of the stroke.
        this.lineJoin = 'round'; //A string that defines shape to be used at the corners of the stroke.
        this.dashArray = null; //A string that defines the stroke dash pattern. Doesn't work on Canvas-powered layers in some old browsers.
        this.dashOffset = null; //A string that defines the distance into the dash pattern to start the dash. Doesn't work on Canvas-powered layers in some old browsers.
        this.fill = true; //Whether to fill the path with color. Set it to false to disable filling on polygons or circles.
        this.fillColor = '#3388ff'; //Fill color. Defaults to the value of the color option
        this.fillOpacity = 0.2; //	Fill opacity.
        this.fillRule = 'evenodd'; //	A string that defines how the inside of a shape is determined.
        //TODO renderer: Renderer; 		Use this specific instance of Renderer for this path. Takes precedence over the map's default renderer.
        this.className = null; //null	Custom class name set on an element. Only for SVG renderer.
        if (pathInfo !== null) {
            for (var key in pathInfo) {
                if (pathInfo[key] !== undefined) {
                    this[key] = pathInfo[key];
                }
            }
        }
    }
    return path;
}());
exports.path = path;
//# sourceMappingURL=path.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/models/scaleModel.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scaleModel = /** @class */ (function () {
    function scaleModel(options) {
        this.maxWidth = 100; //Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
        this.metric = true; //Whether to show the metric scale line (m/km).
        this.imperial = true; //Whether to show the imperial scale line (mi/ft).
        this.updateWhenIdle = true; //If true, the control is updated on moveend, otherwise it's always up-to-date (updated on move).
        this.position = "bottomleft"; //The position of the control (one of the map corners). Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
        if (options !== null) {
            for (var key in options) {
                if (options[key] !== undefined) {
                    this[key] = options[key];
                }
            }
        }
    }
    return scaleModel;
}());
exports.scaleModel = scaleModel;
//# sourceMappingURL=scaleModel.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/models/zoomModel.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var zoomModel = /** @class */ (function () {
    function zoomModel(options) {
        this.zoomInText = "+"; //The text set on the 'zoom in' button.
        this.zoomInTitle = "Zoom in"; //The title set on the 'zoom in' button.
        this.zoomOutText = "-"; //The text set on the 'zoom out' button.
        this.zoomOutTitle = "Zoom out"; //The title set on the 'zoom out' button.
        this.position = "topright"; //The position of the control (one of the map corners). Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
        if (options !== null) {
            for (var key in options) {
                if (options[key] !== undefined) {
                    this[key] = options[key];
                }
            }
        }
    }
    return zoomModel;
}());
exports.zoomModel = zoomModel;
//# sourceMappingURL=zoomModel.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/ngx.leaflet.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/index.ts");
var ngxLeafletModule = /** @class */ (function () {
    function ngxLeafletModule() {
    }
    ngxLeafletModule = __decorate([
        core_1.NgModule({
            declarations: index_1.CandTLeafletComponent.slice(),
            providers: index_1.CandTLeafletService.slice(),
            exports: index_1.CandTLeafletComponent.slice()
        })
    ], ngxLeafletModule);
    return ngxLeafletModule;
}());
exports.ngxLeafletModule = ngxLeafletModule;
//# sourceMappingURL=ngx.leaflet.module.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/polygon/polygon.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/polygon/polygon.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/polygon/polygon.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var group_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/group/group.ts");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var group_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/group.service.ts");
var popup_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/popup.service.ts");
var globalId_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/globalId.service.ts");
var helper_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/helper.service.ts");
var coodinateHandler_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/helpers/coodinateHandler.ts");
var path_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/models/path.ts");
var path_2 = __webpack_require__("../../../../../../Angular2.leaflet.component/interfaces/path.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var PolygonElement = /** @class */ (function (_super) {
    __extends(PolygonElement, _super);
    function PolygonElement(mapService, groupService, popupService, guidService, helperService, elementText, LeafletElement, LeafletGroup) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.groupService = groupService;
        _this.popupService = popupService;
        _this.guidService = guidService;
        _this.helperService = helperService;
        _this.elementText = elementText;
        _this.LeafletElement = LeafletElement;
        _this.LeafletGroup = LeafletGroup;
        _this.latlngs = [[[52.65, -1.2], [52.645, -1.15], [52.696, -1.155], [52.697, -1.189]],
            [[52.66, -1.19], [52.665, -1.16], [52.686, -1.161], [52.687, -1.179]]];
        _this.Options = new path_1.path(null);
        _this.mouseover = undefined;
        _this.onclick = undefined;
        _this.polygon = null;
        _this.originalObject = _this.latlngs.slice();
        _this.globalId = _this.guidService.newGuid();
        return _this;
    }
    PolygonElement.prototype.ngOnInit = function () {
        _super.prototype.assignCartesianArrayToLeafletsLatLngSchema.call(this);
        //check if any of the two optional injections exist
        if (this.LeafletElement || this.LeafletGroup) {
            var inheritedOptions = new path_1.path(this.Options);
            var map = this.mapService.getMap();
            _super.prototype.transformArrayCoordinates.call(this, this.LeafletElement.crs);
            this.polygon = L.polygon([this.latlngs], inheritedOptions);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(this.polygon, map, this.mapService, this.LeafletGroup, false, this.globalId);
            }
            else {
                this.polygon.addTo(map);
            }
        }
        else {
            console.warn("This polygon-element will not be rendered \n the expected parent node of polygon-element should be either leaf-element or leaflet-group");
        }
    };
    PolygonElement.prototype.ngAfterViewInit = function () {
        var textInput = undefined;
        if (this.elementText.nativeElement.childNodes.length > 0) {
            var textNode = this.elementText.nativeElement.childNodes[0];
            textInput = textNode.nodeValue;
        }
        //add popup methods on element
        this.popupService.enablePopup(this.mouseover, this.onclick, this.polygon, textInput);
    };
    PolygonElement.prototype.ngDoCheck = function () {
        var map = this.mapService.getMap();
        var same = this.helperService.arrayCompare(this.originalObject, this.latlngs);
        if (!same) {
            this.originalObject = this.latlngs.slice();
            //if the layer is part of a group
            var inheritedOptions = new path_1.path(this.Options);
            if (this.LeafletGroup) {
                this.polygon = L.polygon([this.latlngs], inheritedOptions);
                this.groupService.addOLayersToGroup(this.polygon, map, this.mapService, this.LeafletGroup, true, this.globalId);
            }
            else {
                map.removeLayer(this.polygon);
                this.polygon = L.polygon([this.latlngs], inheritedOptions);
                this.polygon.addTo(map);
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PolygonElement.prototype, "latlngs", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", typeof (_a = typeof path_2.Ipath !== "undefined" && path_2.Ipath) === "function" && _a || Object)
    ], PolygonElement.prototype, "Options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PolygonElement.prototype, "mouseover", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PolygonElement.prototype, "onclick", void 0);
    PolygonElement = __decorate([
        core_1.Component({
            selector: 'polygon-element',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/polygon/polygon.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/polygon/polygon.css")]
        }),
        __param(6, core_1.Optional()),
        __param(7, core_1.Optional()),
        __metadata("design:paramtypes", [typeof (_b = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _b || Object, typeof (_c = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" && _c || Object, typeof (_d = typeof popup_service_1.PopupService !== "undefined" && popup_service_1.PopupService) === "function" && _d || Object, typeof (_e = typeof globalId_service_1.GuidService !== "undefined" && globalId_service_1.GuidService) === "function" && _e || Object, typeof (_f = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _f || Object, typeof (_g = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _g || Object, typeof (_h = typeof map_1.LeafletElement !== "undefined" && map_1.LeafletElement) === "function" && _h || Object, typeof (_j = typeof group_1.LeafletGroup !== "undefined" && group_1.LeafletGroup) === "function" && _j || Object])
    ], PolygonElement);
    return PolygonElement;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}(coodinateHandler_1.CoordinateHandler));
exports.PolygonElement = PolygonElement;
//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/polyline/polyline.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/polyline/polyline.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/polyline/polyline.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var group_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/group/group.ts");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var group_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/group.service.ts");
var popup_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/popup.service.ts");
var globalId_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/globalId.service.ts");
var helper_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/helper.service.ts");
var coodinateHandler_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/helpers/coodinateHandler.ts");
var path_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/models/path.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var PolylineElement = /** @class */ (function (_super) {
    __extends(PolylineElement, _super);
    function PolylineElement(mapService, groupService, popupService, guidService, helperService, elementText, LeafletElement, LeafletGroup) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.groupService = groupService;
        _this.popupService = popupService;
        _this.guidService = guidService;
        _this.helperService = helperService;
        _this.elementText = elementText;
        _this.LeafletElement = LeafletElement;
        _this.LeafletGroup = LeafletGroup;
        _this.latlngs = [[52.6, -1.1], [52.605, -1.1], [52.606, -1.105], [52.697, -1.109]];
        _this.Options = new path_1.path(null);
        _this.mouseover = undefined;
        _this.onclick = undefined;
        _this.polyline = null;
        _this.originalObject = _this.latlngs.slice();
        _this.globalId = _this.guidService.newGuid();
        return _this;
    }
    PolylineElement.prototype.ngOnInit = function () {
        _super.prototype.assignCartesianArrayToLeafletsLatLngSchema.call(this);
        //check if any of the two optional injections exist
        if (this.LeafletElement || this.LeafletGroup) {
            //polyline shouldn't have a fill
            this.Options.fill = false;
            var inheritedOptions = new path_1.path(this.Options);
            var map = this.mapService.getMap();
            _super.prototype.transformArrayCoordinates.call(this, this.LeafletElement.crs);
            this.polyline = L.polyline(this.latlngs, inheritedOptions);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(this.polyline, map, this.mapService, this.LeafletGroup, false, this.globalId);
            }
            else {
                this.polyline.addTo(map);
            }
        }
        else {
            console.warn("This polyline-element will not be rendered \n the expected parent node of polyline-element should be either leaf-element or leaflet-group");
        }
    };
    PolylineElement.prototype.ngAfterViewInit = function () {
        var textInput = undefined;
        if (this.elementText.nativeElement.childNodes.length > 0) {
            var textNode = this.elementText.nativeElement.childNodes[0];
            textInput = textNode.nodeValue;
        }
        //add popup methods on element
        this.popupService.enablePopup(this.mouseover, this.onclick, this.polyline, textInput);
    };
    PolylineElement.prototype.ngDoCheck = function () {
        var map = this.mapService.getMap();
        var same = this.helperService.arrayCompare(this.originalObject, this.latlngs);
        if (!same) {
            this.originalObject = this.latlngs.slice();
            //if the layer is part of a group
            this.Options.fill = false;
            var inheritedOptions = new path_1.path(this.Options);
            if (this.LeafletGroup) {
                this.polyline = L.polyline(this.latlngs, inheritedOptions);
                this.groupService.addOLayersToGroup(this.polyline, map, this.mapService, this.LeafletGroup, true, this.globalId);
            }
            else {
                map.removeLayer(this.polyline);
                this.polyline = L.polyline(this.latlngs, inheritedOptions);
                this.polyline.addTo(map);
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PolylineElement.prototype, "latlngs", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PolylineElement.prototype, "Options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PolylineElement.prototype, "mouseover", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PolylineElement.prototype, "onclick", void 0);
    PolylineElement = __decorate([
        core_1.Component({
            selector: 'polyline-element',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/polyline/polyline.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/polyline/polyline.css")]
        }),
        __param(6, core_1.Optional()),
        __param(7, core_1.Optional()),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object, typeof (_b = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" && _b || Object, typeof (_c = typeof popup_service_1.PopupService !== "undefined" && popup_service_1.PopupService) === "function" && _c || Object, typeof (_d = typeof globalId_service_1.GuidService !== "undefined" && globalId_service_1.GuidService) === "function" && _d || Object, typeof (_e = typeof helper_service_1.HelperService !== "undefined" && helper_service_1.HelperService) === "function" && _e || Object, typeof (_f = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _f || Object, typeof (_g = typeof map_1.LeafletElement !== "undefined" && map_1.LeafletElement) === "function" && _g || Object, typeof (_h = typeof group_1.LeafletGroup !== "undefined" && group_1.LeafletGroup) === "function" && _h || Object])
    ], PolylineElement);
    return PolylineElement;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}(coodinateHandler_1.CoordinateHandler));
exports.PolylineElement = PolylineElement;
//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/popup/popup.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/popup/popup.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/popup/popup.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/map/map.ts");
var group_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/group/group.ts");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var group_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/group.service.ts");
var coodinateHandler_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/helpers/coodinateHandler.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var PopupElement = /** @class */ (function (_super) {
    __extends(PopupElement, _super);
    function PopupElement(mapService, groupService, LeafletElement, LeafletGroup) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.groupService = groupService;
        _this.LeafletElement = LeafletElement;
        _this.LeafletGroup = LeafletGroup;
        _this.lat = 52.6;
        _this.lon = -1.9;
        _this.content = "nice popup";
        return _this;
    }
    PopupElement.prototype.ngOnInit = function () {
        _super.prototype.assignCartesianPointToLeafletsLatLngSchema.call(this);
        //check if any of the two optional injections exist
        if (this.LeafletElement || this.LeafletGroup) {
            var map = this.mapService.getMap();
            _super.prototype.transformPointCoordinates.call(this, this.LeafletElement.crs);
            var popup = L.popup({ autoClose: false, keepInView: true }).setLatLng([this.lat, this.lon]).setContent(this.content);
            if (this.LeafletGroup) {
                this.groupService.addOLayersToGroup(popup, map, this.mapService, this.LeafletGroup);
            }
            else {
                popup.addTo(map);
            }
        }
        else {
            console.warn("This popup-element will not be rendered \n the expected parent node of popup-element should be either leaf-element or leaflet-group");
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PopupElement.prototype, "lat", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PopupElement.prototype, "lon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PopupElement.prototype, "content", void 0);
    PopupElement = __decorate([
        core_1.Component({
            selector: 'popup-element',
            template: __webpack_require__("../../../../../../Angular2.leaflet.component/popup/popup.html"),
            styles: [__webpack_require__("../../../../../../Angular2.leaflet.component/popup/popup.css")]
        }),
        __param(2, core_1.Optional()),
        __param(3, core_1.Optional()),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object, typeof (_b = typeof group_service_1.GroupService !== "undefined" && group_service_1.GroupService) === "function" && _b || Object, typeof (_c = typeof map_1.LeafletElement !== "undefined" && map_1.LeafletElement) === "function" && _c || Object, typeof (_d = typeof group_1.LeafletGroup !== "undefined" && group_1.LeafletGroup) === "function" && _d || Object])
    ], PopupElement);
    return PopupElement;
    var _a, _b, _c, _d;
}(coodinateHandler_1.CoordinateHandler));
exports.PopupElement = PopupElement;
//# sourceMappingURL=popup.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/services/globalId.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var GuidService = /** @class */ (function () {
    function GuidService() {
    }
    GuidService.prototype.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    GuidService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], GuidService);
    return GuidService;
}());
exports.GuidService = GuidService;
//# sourceMappingURL=globalId.service.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/services/group.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("../../../../rxjs/Rx.js");
var globalId_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/globalId.service.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var GroupService = /** @class */ (function () {
    function GroupService(guidService) {
        this.guidService = guidService;
        this.layerGroup = [];
        this.layerId = [];
        this.layerGroupNumber = 0;
        this.group = {};
    }
    GroupService.prototype.addOLayersToGroup = function (overlay, map, mapService, group, replace, gId) {
        if (replace === void 0) { replace = false; }
        if (!gId) {
            gId = this.guidService.newGuid();
        }
        if (this.layerId.indexOf(gId) === -1) {
            this.layerId.push(gId);
        }
        if (Object.keys(this.group).length !== 0) {
            if (replace) {
                map.removeLayer(this.group);
                if (this.layerId.indexOf(gId) !== -1) {
                    this.layerGroup[this.layerId.indexOf(gId)] = overlay;
                }
                else {
                    this.layerGroup.push(overlay);
                }
                this.group = L.layerGroup(this.getLayerGroup());
                this.group.addTo(map);
            }
            else {
                this.layerGroup.push(overlay);
                this.group.addLayer(overlay);
            }
        }
        if (!replace) {
            this.layerGroup.push(overlay);
            this.group = L.layerGroup(this.getLayerGroup());
            this.group.addTo(map);
        }
        mapService.addOverlay(this.getGroup(), group.name, group.globalId);
    };
    GroupService.prototype.getObservableGroup = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var group = _this.getGroup();
            observer.next(group);
            observer.complete();
        });
    };
    GroupService.prototype.getGroup = function () {
        return this.group;
    };
    GroupService.prototype.getLayerGroup = function () {
        return this.layerGroup;
    };
    GroupService.prototype.getLayerNumber = function () {
        return this.layerGroupNumber;
    };
    GroupService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof globalId_service_1.GuidService !== "undefined" && globalId_service_1.GuidService) === "function" && _a || Object])
    ], GroupService);
    return GroupService;
    var _a;
}());
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/services/helper.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var HelperService = /** @class */ (function () {
    function HelperService() {
    }
    HelperService.prototype.arrayCompare = function (a, b) {
        if (a.length != b.length) {
            return false;
        }
        for (var i in a) {
            // Don't forget to check for arrays in our arrays.
            if (a[i] instanceof Array && b[i] instanceof Array) {
                if (!this.arrayCompare(a[i], b[i])) {
                    return false;
                }
            }
            else if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    };
    HelperService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], HelperService);
    return HelperService;
}());
exports.HelperService = HelperService;
//# sourceMappingURL=helper.service.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/services/map.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("../../../../rxjs/Rx.js");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var MapService = /** @class */ (function () {
    function MapService() {
        this.basemaps = {};
        this.overlays = {};
        this.layerControlflag = false;
        this.layersInControlNumber = 0;
        this.layerControlObject = {};
        this.groupIdentifiers = [];
        this.groupNames = [];
    }
    MapService.prototype.setMap = function (map) {
        this.map = map;
    };
    MapService.prototype.getMap = function () {
        return this.map;
    };
    MapService.prototype.setLayerControl = function (state) {
        this.layerControlflag = state;
    };
    MapService.prototype.getLayerControl = function () {
        return this.layerControlflag;
    };
    MapService.prototype.addBasemap = function (basemap, name) {
        if (name === '') {
            name = 'unknown layer';
        }
        if (this.basemaps[name] === undefined) {
            this.basemaps[name] = basemap;
        }
        else {
            name = this.getUniqueName(name);
            this.addBasemap(basemap, name);
        }
    };
    MapService.prototype.getUniqueName = function (name) {
        var nameindex = 0;
        var newName = name;
        if (name.indexOf('(') !== -1) {
            nameindex = parseInt(name.split('(')[1].split(')')[0]);
            nameindex += 1;
            newName = name.split('(')[0];
        }
        else {
            nameindex = 1;
        }
        return name = newName + '(' + nameindex + ')';
    };
    MapService.prototype.addOverlay = function (overlay, name, gId) {
        if (this.groupIdentifiers.indexOf(gId) !== -1) {
            var index = this.groupIdentifiers.indexOf(gId);
            var existing_name = this.groupNames[index];
            this.overlays[existing_name] = overlay;
        }
        else {
            if (name === '') {
                name = 'unknown group';
            }
            if (this.overlays[name] === undefined) {
                this.groupNames.push(name);
                this.groupIdentifiers.push(gId);
                this.overlays[name] = overlay;
            }
            else {
                name = this.getUniqueName(name);
                if (this.groupNames.indexOf(name) === -1) {
                    this.groupNames.push(name);
                    this.groupIdentifiers.push(gId);
                }
                else {
                    this.addOverlay(overlay, name);
                }
            }
        }
        this.addControl();
    };
    MapService.prototype.getBasemaps = function () {
        return this.basemaps;
    };
    MapService.prototype.getOverlays = function () {
        return this.overlays;
    };
    MapService.prototype.getObservableOverlays = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            observer.next(_this.overlays);
            observer.complete();
        });
    };
    MapService.prototype.getObservableBasemaps = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            observer.next(_this.basemaps);
            observer.complete();
        });
    };
    MapService.prototype.refreshOverlays = function (remove, add) {
        var overlays = this.getOverlays();
        for (var key in overlays) {
            if (overlays[key] instanceof Array) {
                overlays[key].forEach(function (element, index, arr) {
                    if (element._leaflet_id == remove._leaflet_id) {
                        arr[index] = add;
                    }
                });
            }
        }
    };
    MapService.prototype.increaseNumber = function () {
        this.layersInControlNumber += 1;
    };
    MapService.prototype.getLayerNumber = function () {
        return this.layersInControlNumber;
    };
    MapService.prototype.addControl = function () {
        if (this.layerControlflag) {
            var map = this.getMap();
            if (Object.keys(this.layerControlObject).length !== 0) {
                this.layerControlObject.getContainer().innerHTML = '';
                map.removeControl(this.layerControlObject);
            }
            this.layerControlObject = L.control.layers(this.getBasemaps(), this.getOverlays()).addTo(map);
        }
    };
    MapService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());
exports.MapService = MapService;
//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ "../../../../../../Angular2.leaflet.component/services/popup.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var PopupService = /** @class */ (function () {
    function PopupService() {
    }
    PopupService.prototype.enablePopup = function (mouseover, onclick, element, text) {
        if (mouseover && onclick) {
            mouseover = undefined;
            console.warn('you can not use mouseover and onclick at the same time, mouseover is going to be depressed');
        }
        if (mouseover) {
            if (mouseover === 'true' && text) {
                mouseover = text;
            }
            else if (mouseover === true && !text) {
                mouseover = "true";
            }
            element.bindPopup(mouseover);
            element.on('mouseover', function () {
                this.openPopup();
            }).on('mouseout', function () {
                this.closePopup();
            });
        }
        if (onclick) {
            if (onclick === 'true' && text) {
                onclick = text;
            }
            else if (onclick === true && !text) {
                onclick = "true";
            }
            element.bindPopup(onclick);
            element.on('click', function () {
                this.openPopup();
            });
        }
        if (!mouseover && !onclick && text) {
            element.bindPopup(text);
            element.on('mouseover', function () {
                this.openPopup();
            }).on('mouseout', function () {
                this.closePopup();
            });
        }
    };
    PopupService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PopupService);
    return PopupService;
}());
exports.PopupService = PopupService;
//# sourceMappingURL=popup.service.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_service_1 = __webpack_require__("../../../../../src/app/services/annotation.service.ts");
var intro_view_component_1 = __webpack_require__("../../../../../src/app/intro-view/intro-view.component.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var coordinates_1 = __webpack_require__("../../../../../src/app/display-coordinates/coordinates.ts");
var extended_map_component_1 = __webpack_require__("../../../../../src/app/extended/extended-map.component.ts");
var random_points_1 = __webpack_require__("../../../../../src/app/random/random.points.ts");
var game_map_component_1 = __webpack_require__("../../../../../src/app/game/game-map.component.ts");
var basic_map_component_1 = __webpack_require__("../../../../../src/app/basic/basic-map.component.ts");
var custom_projection_component_1 = __webpack_require__("../../../../../src/app/custom-projection/custom-projection.component.ts");
var simple_component_1 = __webpack_require__("../../../../../src/app/simple/simple.component.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var material_1 = __webpack_require__("../../../material/@angular/material.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var ngx_leaflet_module_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/ngx.leaflet.module.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var generate_points_1 = __webpack_require__("../../../../../src/app/experiments/generate.points.ts");
var game_1 = __webpack_require__("../../../../../src/app/game/game.ts");
var game_resolver_1 = __webpack_require__("../../../../../src/app/game/game.resolver.ts");
var main_view_component_1 = __webpack_require__("../../../../../src/app/main-view/main-view.component.ts");
var toolbar_element_1 = __webpack_require__("../../../../../src/app/toolbar/toolbar.element.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                material_1.MaterialModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ngx_leaflet_module_1.ngxLeafletModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: intro_view_component_1.IntroViewComponent },
                    { path: 'main', component: main_view_component_1.MainViewComponent },
                    { path: 'basic', component: basic_map_component_1.BasicMapComponent },
                    { path: 'extended', component: extended_map_component_1.ExtendedMapComponent },
                    { path: 'projection', component: custom_projection_component_1.CustomProjectionComponent },
                    {
                        path: 'game', component: game_map_component_1.GameComponent,
                        resolve: {
                            countries: game_resolver_1.GameResolver
                        }
                    },
                    { path: 'random', component: random_points_1.RandomPoints },
                    { path: 'simple', component: simple_component_1.Simple }
                ]),
            ],
            declarations: [
                app_component_1.AppComponent,
                intro_view_component_1.IntroViewComponent,
                main_view_component_1.MainViewComponent,
                basic_map_component_1.BasicMapComponent,
                extended_map_component_1.ExtendedMapComponent,
                custom_projection_component_1.CustomProjectionComponent, game_map_component_1.GameComponent,
                game_1.GamePoints,
                random_points_1.RandomPoints,
                generate_points_1.GeneratePoints,
                simple_component_1.Simple,
                toolbar_element_1.ToolbarElement,
                coordinates_1.CoordinateControl
            ],
            providers: [game_resolver_1.GameResolver, annotation_service_1.AnnotationService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/basic/basic-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n    height:100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/basic/basic-map.component.html":
/***/ (function(module, exports) {

module.exports = "<leaf-element [zoom]=11 [layerControl]=true>\n\t<layer-element [slippyLayer]=\"'http://{s}.tile.osm.org/{z}/{x}/{y}.png'\"></layer-element>\n\t<layer-element [wmsLayer]=\"'http://78.46.70.93:8080/geoserver/wms'\" [name]=\"'cnt:post_codes'\" [opacity]=0.3></layer-element>\n\t<leaflet-group>\n\t\t<circle-element [lat]=52.62 [lon]=-1.12 [radius]=180></circle-element>\n\t\t<circle-element [lat]=52.63 [lon]=-1.13 [radius]=180 [Options]=\"{color:'#576887', weight:6}\"></circle-element>\n\t</leaflet-group>\n\t<polygon-element [latlngs]=\"[[52.65, -1.2],[52.645, -1.15], [52.696, -1.155], [52.697, -1.189]]\"></polygon-element>\n</leaf-element>"

/***/ }),

/***/ "../../../../../src/app/basic/basic-map.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var BasicMapComponent = /** @class */ (function () {
    function BasicMapComponent() {
    }
    BasicMapComponent = __decorate([
        core_1.Component({
            selector: 'basic-map',
            template: __webpack_require__("../../../../../src/app/basic/basic-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/basic/basic-map.component.css")],
        })
    ], BasicMapComponent);
    return BasicMapComponent;
}());
exports.BasicMapComponent = BasicMapComponent;
//# sourceMappingURL=basic-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/custom-projection/custom-projection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n    height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/custom-projection/custom-projection.component.html":
/***/ (function(module, exports) {

module.exports = "\t<leaf-element [x]=475000 [y]=4202000 [zoom]=5 [minZoom]=1 [layerControl]=true [crs]='coordinateSystem' [layerControl]=true>\n\t\t<layer-element [name]=\"'geodata.gov.gr:d7f50467-e5ef-49ac-a7ce-15df3e2ed738'\" [type]=\"'basemap'\" [wmsLayer]=\"'http://geodata.gov.gr/geoserver/ows'\"></layer-element>\n\t\t<circle-element [x]=475000 [y]=4202000 [mouseover]=\"'Acropolis'\"></circle-element>\n\t\t<circle-marker-element [x]=476000 [y]=4202000 [mouseover]=\"'circle-marker'\"></circle-marker-element>\n\t\t<marker-element [x]=476000 [y]=4202100 [mouseover]=\"'marker'\"></marker-element>\n\t\t<polygon-element [xys]=\"[[477000, 4202200], [477000, 4202300], [478000, 4202300], [478000, 4202200]]\" [onclick]=\"'hello I am a polygon on a weird srs'\"></polygon-element>\n\t\t<polyline-element [xys]=\"[[477100, 4202200], [477100, 4202400], [478100, 4202400]]\" [onclick]=\"'hello I am a polyline on a weird srs'\"></polyline-element>\n\t\t<coordinate-control [crs]='system'></coordinate-control>\n\t\t<leaflet-group [name]=\"'rest'\">\n\t\t\t<geojson-element [geojson]='{\n    \"type\": \"FeatureCollection\",\n    \"features\": [\n      {\n        \"type\": \"Feature\",\n        \"properties\": {},\n        \"geometry\": {\n          \"type\": \"LineString\",\n          \"coordinates\": [\n            [\n              491000,\n              4202000\n            ],\n            [\n              491100,\n              4202000\n            ],\n            [\n              490900,\n              4202000\n            ],\n            [\n              491100,\n              4202000\n            ]\n          ]\n        }\n      },\n      {\n        \"type\": \"Feature\",\n        \"properties\": {},\n        \"geometry\": {\n          \"type\": \"Polygon\",\n          \"coordinates\": [\n            [\n              [\n                492000,\n                4203000\n              ],\n              [\n                493000,\n                4203000\n              ],\n              [\n                493000,\n                4204000\n              ],\n              [\n                492000,\n                4204000\n              ],\n              [\n                492000,\n                4203000\n              ]\n            ]\n          ]\n        }\n      },\n      {\n        \"type\": \"Feature\",\n        \"properties\": {},\n        \"geometry\": {\n          \"type\": \"Point\",\n          \"coordinates\": [\n            494000,\n            4204000\n          ]\n        }\n      },\n      {\n        \"type\": \"Feature\",\n        \"properties\": {},\n        \"geometry\": {\n          \"type\": \"Point\",\n          \"coordinates\": [\n            494400,\n            4204400\n          ]\n        }\n      }\n    ]\n  }'></geojson-element>\n\t\t</leaflet-group>\n\t</leaf-element>"

/***/ }),

/***/ "../../../../../src/app/custom-projection/custom-projection.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var Proj4 = __webpack_require__("../../../../proj4/lib/index.js");
var CustomProjectionComponent = /** @class */ (function () {
    function CustomProjectionComponent() {
        this.systemDefinition = "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +units=m +no_defs";
        this.coordinateSystem = 'L.CRS.EPSG2100';
        this.system = {};
    }
    CustomProjectionComponent.prototype.ngOnInit = function () {
        var DefaultIcon = L.icon({
            iconUrl: '/assets/marker-icon.png',
            shadowUrl: '/assets/marker-shadow.png'
        });
        L.Marker.prototype.options.icon = DefaultIcon;
        this.system = Proj4.default(this.systemDefinition);
        var model = this;
        var upleft = [-34387.6695, 4641211.3222];
        var botright = [1056496.8434, 3691163.5140];
        var extentWidth = botright[0] - upleft[0];
        var extentHeight = upleft[1] - botright[1];
        var boundpointa = new L.Point(upleft[0], upleft[1]);
        var boundpointb = new L.Point(botright[0], botright[1]);
        var b = L.bounds(boundpointa, boundpointb);
        var resX = extentWidth / 256;
        var resY = extentHeight / 256;
        var res = Math.max(resX, resY);
        L.Projection[this.system.oProj.projName] = {
            R: this.system.a,
            R_MINOR: this.system.b,
            bounds: b,
            project: function (latlng) {
                var point = model.system.forward([latlng.lng, latlng.lat]);
                return new L.Point(point[0], point[1]);
            },
            unproject: function (point) {
                var point2 = model.system.inverse([point.x, point.y]);
                return new L.LatLng(point2[1], point2[0]);
            }
        };
        L.CRS['EPSG2100'] = L['extend']({}, L.CRS, {
            code: 'EPSG:2100',
            projection: L.Projection[model.system.oProj.projName],
            transformation: new L.Transformation(model.system.oProj.k0, -model.system.oProj.lat0, -model.system.oProj.k0, model.system.oProj.long0),
            scale: function (zoom) {
                return 1 / (res / Math.pow(2, zoom));
            },
            distance: function (latlng1, latlng2) {
                var ll1 = model.system.forward([latlng1.lng, latlng1.lat]);
                var ll2 = model.system.forward([latlng2.lng, latlng2.lat]);
                var dx = ll2[0] - ll1[0], dy = ll2[1] - ll1[1];
                return Math.sqrt(dx * dx + dy * dy);
            }
        });
    };
    CustomProjectionComponent = __decorate([
        core_1.Component({
            selector: 'custom-projection',
            template: __webpack_require__("../../../../../src/app/custom-projection/custom-projection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/custom-projection/custom-projection.component.css")],
        })
    ], CustomProjectionComponent);
    return CustomProjectionComponent;
}());
exports.CustomProjectionComponent = CustomProjectionComponent;
//# sourceMappingURL=custom-projection.component.js.map

/***/ }),

/***/ "../../../../../src/app/display-coordinates/coordinates.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var CoordinateControl = /** @class */ (function () {
    function CoordinateControl(mapService) {
        this.mapService = mapService;
        this.crs = {};
    }
    CoordinateControl.prototype.ngOnInit = function () {
        var model = this;
        this.ourCustomControlConstructor = L.Control.extend({
            options: {
                position: 'topleft'
            },
            initialize: function (data) {
                this._data = data;
            },
            onAdd: function (map) {
                return this.updateModel(this._data);
            },
            updateModel: function (_data) {
                var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
                container.style.backgroundColor = 'white';
                container.style.width = '300px';
                container.style.height = '70px';
                container.innerHTML = "<div style='padding-left:5px;'> x " + _data.x + "</div>" +
                    "<div style='padding-left:5px;'> y " + _data.y + "</div>";
                container.onclick = function () {
                    console.log('buttonClicked');
                };
                return container;
            }
        });
        var map = this.mapService.getMap();
        map.on('mousemove', function (e) {
            map.removeControl(model.ourCustomControl);
            var proj = model.crs.forward([e.latlng.lng, e.latlng.lat]);
            model.ourCustomControl = new model.ourCustomControlConstructor({
                x: proj[0],
                y: proj[1]
            });
            map.addControl(model.ourCustomControl);
        });
        this.ourCustomControl = new this.ourCustomControlConstructor({ x: 0, y: 0 });
        map.addControl(this.ourCustomControl);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CoordinateControl.prototype, "crs", void 0);
    CoordinateControl = __decorate([
        core_1.Component({
            selector: 'coordinate-control',
            template: ""
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object])
    ], CoordinateControl);
    return CoordinateControl;
    var _a;
}());
exports.CoordinateControl = CoordinateControl;
//# sourceMappingURL=coordinates.js.map

/***/ }),

/***/ "../../../../../src/app/experiments/generate.points.html":
/***/ (function(module, exports) {

module.exports = "<circle-element *ngFor=\"let c; of:latlonColllection;\" [lat]='c.lat' [lon]='c.lon'> </circle-element>\n<polyline-element [latlngs]=\"allp\" [Options]=\"getnewColor()\"></polyline-element>"

/***/ }),

/***/ "../../../../../src/app/experiments/generate.points.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("../../../../rxjs/Rx.js");
var map_service_1 = __webpack_require__("../../../../../../Angular2.leaflet.component/services/map.service.ts");
var moment = __webpack_require__("../../../../moment/moment.js");
var GeneratePoints = /** @class */ (function () {
    function GeneratePoints(mapService) {
        this.mapService = mapService;
        this.population = 10;
        this.count = Array(this.population).fill(0, 0).map(function (x, i) { return i; });
        this.lat = this.randomArray(52.611, 52.701, this.population);
        this.lon = this.randomArray(-1.109, -1.001, this.population);
        this.latlonColllection = [];
        this.allp = this.mergelatlon();
        this.allpclone = this.allp.slice();
        this.generations = [];
        this.generationsScore = [];
        this.seed = Array(this.population).fill(0, 0).map(function (x, i) { return i; });
        this.genloop = 0;
        this.keep = 1;
        this.timer = Rx_1.Observable.timer(2000, 50);
        this.options = {};
        this.solutions = 0;
        this.getdistancefromlatlon = function (lat1, lon1, lat2, lon2) {
            var R = 6378.137; // Radius of earth in KM
            var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
            var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return d * 1000; // meters
        };
    }
    GeneratePoints.prototype.randomFromInterval = function (min, max) {
        var rand = Math.floor(Math.random() * (max * 1000 - min * 1000 + 1) + min * 1000);
        return rand / 1000;
    };
    GeneratePoints.prototype.randomArray = function (min, max, size) {
        var _this = this;
        var val = Array(size).fill(0, 0);
        val.forEach(function (element, index, arrayObject) {
            arrayObject[index] = _this.randomFromInterval(min, max);
        });
        console.log(val);
        return val;
    };
    GeneratePoints.prototype.ngOnInit = function () {
        var _this = this;
        this.count.forEach(function (element) {
            _this.latlonColllection.push({ lat: _this.lat[element], lon: _this.lon[element] });
        });
        this.subscription = this.timer.subscribe(function (t) {
            _this.shufflestaff(t);
        });
        var model = this;
        this.ourCustomControlConstructor = L.Control.extend({
            options: {
                position: 'topleft'
            },
            initialize: function (data) {
                this._data = data;
            },
            onAdd: function (map) {
                return this.updateModel(this._data);
            },
            updateModel: function (_data) {
                var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
                container.style.backgroundColor = 'white';
                container.style.width = '300px';
                container.style.height = '70px';
                container.innerHTML = "<div style='padding-left:5px;'> unmutatable genes are now at : " + _data.keep + "</div><br>" +
                    "<div style='padding-left:5px;'> best solution at " + _data.solution + "</div>" +
                    "<div style='padding-left:5px;'> current iteration at " + _data.distance + "</div>";
                container.onclick = function () {
                    console.log('buttonClicked');
                };
                return container;
            }
        });
        var map = this.mapService.getMap();
        this.ourCustomControl = new this.ourCustomControlConstructor({ keep: this.keep, solution: 0, distance: 0 });
        map.addControl(this.ourCustomControl);
    };
    GeneratePoints.prototype.sortNumber = function (a, b) {
        return a - b;
    };
    GeneratePoints.prototype.shufflestaff = function (t) {
        var newgen = this.allpclone.slice();
        var seedclone = this.seed.slice();
        newgen = this.evolve(seedclone, newgen);
        var distance = this.getdistance(newgen);
        if (this.generations.length < 10) {
            this.generations.push(newgen);
            this.generationsScore.push(distance);
            this.solutions += 1;
        }
        else {
            var maxItem = Math.max.apply(Math, this.generationsScore);
            var minItem = Math.min.apply(Math, this.generationsScore);
            if (maxItem > distance) {
                var maxIndex = this.generationsScore.indexOf(maxItem);
                var minIndex = this.generationsScore.indexOf(minItem);
                var marriage = this.marry(this.generations[minIndex].slice(), newgen);
                var marriagedistance = this.getdistance(marriage);
                if (distance < marriagedistance) {
                    this.generationsScore[maxIndex] = distance;
                    this.generations[maxIndex] = newgen;
                    this.solutions += 1;
                    if (this.solutions % Math.floor(this.population / 4) === 0) {
                        if (this.keep == this.population - 2) {
                        }
                        else {
                            this.keep += 1;
                        }
                    }
                }
                else {
                    this.generationsScore[maxIndex] = marriagedistance;
                    this.generations[maxIndex] = marriage;
                    this.solutions += 1;
                    // if (this.solutions % Math.floor(this.population / 4) === 0) {
                    //     this.keep += 1;
                    // }
                }
                console.log("score", this.generationsScore);
            }
        }
        minItem = Math.min.apply(Math, this.generationsScore);
        minIndex = this.generationsScore.indexOf(minItem);
        var map = this.mapService.getMap();
        map.removeControl(this.ourCustomControl);
        this.ourCustomControl = new this.ourCustomControlConstructor({
            keep: this.keep,
            solution: this.generationsScore[minIndex],
            distance: t
        });
        map.addControl(this.ourCustomControl);
        this.allp = this.generations[minIndex];
        this.allpclone = this.generations[this.genloop];
        if (this.genloop < this.generations.length - 1) {
            this.genloop += 1;
        }
        else {
            this.genloop = 0;
        }
        if (this.keep == this.population) {
            this.subscription.unsubscribe();
        }
    };
    GeneratePoints.prototype.getnewColor = function () {
        return { color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16) };
    };
    GeneratePoints.prototype.evolve = function (seedclone, newgen) {
        this.shuffle(seedclone);
        var seedsplice = seedclone.splice(0, this.keep);
        seedsplice.sort(this.sortNumber).reverse();
        var seedgen = [];
        seedsplice.forEach(function (element, index) {
            seedgen[index] = newgen[element];
        });
        seedsplice.forEach(function (element, index) {
            newgen.splice(element, 1);
        });
        this.shuffle(newgen);
        seedsplice.forEach(function (element, index) {
            newgen.splice(element, 0, seedgen[index]);
        });
        return newgen;
    };
    GeneratePoints.prototype.marry = function (genPoolA, genPoolB) {
        var _this = this;
        var seedclone = this.seed.slice();
        var seedsplice = seedclone.splice(0, this.keep);
        seedsplice.sort(this.sortNumber).reverse();
        var common = [];
        genPoolA.forEach(function (element, index) {
            if (element[0] == genPoolB[index][0] && element[1] == genPoolB[index][1]) {
                common.push(index);
            }
        });
        seedsplice.forEach(function (element, index) {
            if (common.length < _this.population - 1) {
                if (common.indexOf(element) === -1) {
                    common.push(element);
                }
            }
        });
        if (common.length > 0) {
            var mm = this.findLargeSegments(genPoolA);
            var cmm = common.indexOf(mm);
            if (cmm !== -1) {
                common.splice(cmm, 1);
                cmm = common.indexOf(mm + 1);
                if (cmm !== -1) {
                    common.splice(cmm, 1);
                }
                console.log("got rid of largest segment");
            }
            common.sort(this.sortNumber).reverse();
            var seedgen = [];
            common.forEach(function (element, index) {
                seedgen[index] = genPoolA[element];
            });
            common.forEach(function (element, index) {
                genPoolA.splice(element, 1);
            });
            this.shuffle(genPoolA);
            common.forEach(function (element, index) {
                genPoolA.splice(element, 0, seedgen[index]);
            });
            console.log("marriage keep", common.length);
            console.log(moment().format("h:mm:ss a"));
            return genPoolA;
        }
        return genPoolA;
    };
    GeneratePoints.prototype.findLargeSegments = function (a) {
        var _this = this;
        var distanceList = [];
        a.forEach(function (element, index) {
            if (index < a.length - 1) {
                var dist = _this.getdistancefromlatlon(element[0], element[1], a[index + 1][0], a[index + 1][1]);
                distanceList.push(dist);
            }
        });
        //var indeces = Array(distanceList.length).fill(0, 0).map((x, i) => i);
        var maxItem = Math.max.apply(Math, distanceList);
        var maxIndex = distanceList.indexOf(maxItem);
        return maxIndex;
    };
    GeneratePoints.prototype.mergelatlon = function () {
        var allpoints = [];
        var distance = 0;
        var model = this;
        this.count.forEach(function (element, index) {
            allpoints[index] = [model.lat[index], model.lon[index]];
        });
        return allpoints;
    };
    GeneratePoints.prototype.getdistance = function (gen) {
        var _this = this;
        var distance = 0;
        gen.forEach(function (element, index) {
            if (index + 1 > gen.length - 1) {
            }
            else {
                var dis = _this.getdistancefromlatlon(gen[index][0], gen[index][1], gen[index + 1][0], gen[index + 1][1]);
                distance += dis;
            }
        });
        return distance;
    };
    GeneratePoints.prototype.shuffle = function (a) {
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        var _a;
    };
    GeneratePoints.prototype.distance = function (ax, ay, bx, by) {
        return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));
    };
    GeneratePoints.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    GeneratePoints.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GeneratePoints.prototype, "count", void 0);
    GeneratePoints = __decorate([
        core_1.Component({
            selector: 'generate-points',
            template: __webpack_require__("../../../../../src/app/experiments/generate.points.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof map_service_1.MapService !== "undefined" && map_service_1.MapService) === "function" && _a || Object])
    ], GeneratePoints);
    return GeneratePoints;
    var _a;
}());
exports.GeneratePoints = GeneratePoints;
//# sourceMappingURL=generate.points.js.map

/***/ }),

/***/ "../../../../../src/app/extended/extended-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    width: 100px;\n    height:100px;\n}\n\n:host /deep/ .map-container{\n    top: 80px !important;\n    height: 220px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extended/extended-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-dim\" layout=\"column\">\n\t<toolbar-element></toolbar-element>\n\t<leaf-element [zoom]=11 [layerControl]=true>\n\t\t<zoom-control></zoom-control>\n\t\t<scale-control></scale-control>\n\t\t<attribution-control></attribution-control>\n\t\t<layer-element [name]=\"'openstreetmap'\" [type]=\"'basemap'\" [slippyLayer]=\"'http://{s}.tile.osm.org/{z}/{x}/{y}.png'\"></layer-element>\n\t\t<layer-element [name]=\"'carto'\" [type]=\"'basemap'\" [slippyLayer]=\"'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'\"></layer-element>\n\t\t<layer-element [wmsLayer]=\"'http://78.46.70.93:8080/geoserver/wms'\" [name]=\"'cnt:post_codes'\" [opacity]=0.3></layer-element>\n\t\t<leaflet-group [name]=\"'markers'\">\n\t\t\t<marker-element [iconUrl]=\"'assets/custom-marker.png'\" [lat]=52.6 [lon]=-1.1 [onclick]=\"'you clicked here'\"></marker-element>\n\t\t\t<marker-element [lat]=52.65 [lon]=-1.15 [mouseover]=\"'marker B'\"></marker-element>\n\t\t\t<marker-element [lat]=52.65 [lon]=-1.17 [mouseover]=\"'marker C'\"></marker-element>\n\t\t</leaflet-group>\n\t\t<leaflet-group [name]=\"'circles'\">\n\t\t\t<circle-element [lat]=52.62 [lon]=-1.12 [radius]=180 [onclick]=\"'hello I am a circle-element'\"> </circle-element>\n\t\t\t<circle-marker-element [lat]=52.63 [lon]=-1.13 [Options]=\"{color:'#576887', weight:6}\">this is from ng-content</circle-marker-element>\n\t\t</leaflet-group>\n\t\t<leaflet-group [name]=\"'popup'\">\n\t\t\t<popup-element [lat]=52.65 [lon]=-1.30 [content]=\"'Good Popup'\"></popup-element>\n\t\t\t<popup-element [lat]=52.70 [lon]=-1.35 [content]=\"'Bad Popup'\"></popup-element>\n\t\t</leaflet-group>\n\t\t<leaflet-group [name]=\"'rest'\">\n\t\t\t<popup-element [lat]=52.65 [lon]=-1.17 [content]=\"'Best popup'\"></popup-element>\n\t\t\t<polygon-element [onclick]=\"'hello I am a polygon with a hole'\"></polygon-element>\n\t\t\t<polygon-element [latlngs]=\"[[52.68, -1.22], [52.65, -1.21], [52.697, -1.20], [52.698, -1.21]]\" [onclick]=\"'hello I am a polygon without a hole'\"></polygon-element>\n\t\t\t<polyline-element [onclick]=\"'hello I am a polyline'\" [latlngs]=\"[[52.6, -1.1],[52.605, -1.1], [52.606, -1.105], [52.697, -1.109]]\"></polyline-element>\n\t\t\t<marker-element [iconUrl]=\"'assets/custom-marker.png'\" [lat]=52.7 [lon]=-1.1 [onclick]=\"'custom icon'\"></marker-element>\n\t\t\t<geojson-element [geojson]='g'></geojson-element>\n\t\t</leaflet-group>\n\t</leaf-element>\n</div>"

/***/ }),

/***/ "../../../../../src/app/extended/extended-map.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var L = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
var ExtendedMapComponent = /** @class */ (function () {
    function ExtendedMapComponent() {
        this.g = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [
                                -2.197265625,
                                53.12040528310657
                            ],
                            [
                                -2.164306640625,
                                52.5897007687178
                            ],
                            [
                                -1.175537109375,
                                52.62306005822959
                            ],
                            [
                                -1.318359375,
                                52.14697334064471
                            ],
                            [
                                -0.45043945312499994,
                                52.09300763963822
                            ],
                            [
                                -0.50537109375,
                                51.86292391360244
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    -1.3623046875,
                                    51.781435604431195
                                ],
                                [
                                    -1.3623046875,
                                    51.896833883012484
                                ],
                                [
                                    -1.131591796875,
                                    51.896833883012484
                                ],
                                [
                                    -1.131591796875,
                                    51.781435604431195
                                ],
                                [
                                    -1.3623046875,
                                    51.781435604431195
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -0.59326171875,
                            52.44261787120725
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -1.9116210937499998,
                            52.335339071889386
                        ]
                    }
                }
            ]
        };
    }
    ExtendedMapComponent.prototype.ngOnInit = function () {
        var DefaultIcon = L.icon({
            iconUrl: '/assets/marker-icon.png',
            shadowUrl: '/assets/marker-shadow.png'
        });
        L.Marker.prototype.options.icon = DefaultIcon;
    };
    ExtendedMapComponent = __decorate([
        core_1.Component({
            selector: 'extended-map',
            template: __webpack_require__("../../../../../src/app/extended/extended-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extended/extended-map.component.css")],
        })
    ], ExtendedMapComponent);
    return ExtendedMapComponent;
}());
exports.ExtendedMapComponent = ExtendedMapComponent;
//# sourceMappingURL=extended-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/game/game-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    width: 100px;\n    height:100px;\n}\n\n:host /deep/ .map-container{\n    top: 80px !important;\n    height: 220px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-dim\" layout=\"column\">\n\t<toolbar-element></toolbar-element>\n\t<leaf-element [minZoom]=0 [zoom]=1 [layerControl]=true>\n\t\t<zoom-control></zoom-control>\n\t\t<scale-control></scale-control>\n\t\t<game-points></game-points>\n\t\t<geojson-element [geojson]='countries'></geojson-element>\n\t</leaf-element>\n</div>"

/***/ }),

/***/ "../../../../../src/app/game/game-map.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var GameComponent = /** @class */ (function () {
    function GameComponent(route) {
        this.route = route;
    }
    GameComponent.prototype.ngOnInit = function () {
        this.countries = this.route.snapshot.data['countries'];
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'my-game-mapp',
            template: __webpack_require__("../../../../../src/app/game/game-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game-map.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
    ], GameComponent);
    return GameComponent;
    var _a;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/game/game.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/game/game.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Rx_1 = __webpack_require__("../../../../rxjs/Rx.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var GameResolver = /** @class */ (function () {
    function GameResolver(http) {
        this.http = http;
    }
    GameResolver.prototype.resolve = function () {
        return this.http.get("./countries.json", {})
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw('Server error'); });
    };
    GameResolver = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], GameResolver);
    return GameResolver;
    var _a;
}());
exports.GameResolver = GameResolver;
//# sourceMappingURL=game.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/game/game.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var GamePoints = /** @class */ (function () {
    function GamePoints() {
    }
    GamePoints = __decorate([
        core_1.Component({
            selector: 'game-points',
            template: __webpack_require__("../../../../../src/app/game/game.html")
        })
    ], GamePoints);
    return GamePoints;
}());
exports.GamePoints = GamePoints;
//# sourceMappingURL=game.js.map

/***/ }),

/***/ "../../../../../src/app/intro-view/intro-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    width: 100px;\n    height: 100px;\n}\n\n:host .offset {\n    padding-top: 64px;\n}\n\n@media (min-width: 1050px) {\n    .header {\n        margin-top: 64px;\n        text-align: center;\n        margin: 0 !important;\n        font-size: 112px !important;\n    }\n    .info-card {\n        height: 136px;\n        margin-left: 16px;\n        margin-right: 16px;\n    }\n}\n\n@media (max-width: 1050px) {\n    .header {\n        margin-top: 64px;\n        text-align: center;\n        margin: 0 !important;\n        font-size: 56px !important;\n    }\n    .info-card {\n        height: 216px;\n        margin-left: 16px;\n        margin-right: 16px;\n    }\n}\n\n@media (max-width: 530px) {\n    .header {\n        margin-top: 64px;\n        text-align: center;\n        margin: 0 !important;\n        font-size: 28px !important;\n    }\n    .info-card {\n        height: 256px;\n        margin-left: 16px;\n        margin-right: 16px;\n    }\n}\n\n.subheader {\n    text-align: center;\n}\n\n:host /deep/ .map-container {\n    top: 8px !important;\n    left: 8px !important;\n    right: 8px !important;\n    height: 220px;\n}\n\n.map-card {\n    height: 192px;\n    margin-left: 16px;\n    margin-right: 16px;\n}\n\n.card-header {\n    font-size: 48px;\n}\n\nmd-grid-list {\n    margin-top: 32px;\n    height: 256px;\n}\n\nmd-grid-tile {\n    height: 256px;\n}\n\nbutton {\n    text-align: center;\n}\n\n[class^=\"ribbon-\"] {\n    position: relative;\n    margin-bottom: 80px;\n}\n\n[class^=\"ribbon-\"]:before, [class^=\"ribbon-\"]:after {\n    content: \"\";\n    position: absolute;\n}\n\n.ribbon-2 {\n    width: 150px;\n    height: 50px;\n    background: #3f51b5;\n}\n\n.ribbon-2:after {\n    height: 0;\n    width: 0;\n    border-top: 25px solid transparent;\n    border-bottom: 25px solid transparent;\n    border-left: 15px solid #3f51b5;\n    right: -15px;\n    top: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/intro-view/intro-view.component.html":
/***/ (function(module, exports) {

module.exports = "<toolbar-element></toolbar-element>\n<section class=\"mat-typography offset\">\n    <h1 class=\"mat-display-4 header\">ngx.leaflet.components</h1>\n    <h1 class=\"mat-display-1 subheader\">a template based angular-leaflet library</h1>\n</section>\n\n\n<md-card class=\"map-card\">\n    <leaf-element [zoom]=4>\n        <layer-element [slippyLayer]=\"'http://{s}.tile.osm.org/{z}/{x}/{y}.png'\"></layer-element>\n    </leaf-element>\n</md-card>\n\n<md-grid-list cols=\"3\" rowHeight=\"3:1\">\n    <md-grid-tile>\n        <md-card class=\"info-card\">\n            <md-card-header>\n                <md-card-title>\n                    <md-icon class=\"card-header\">map</md-icon>\n                </md-card-title>\n                <md-card-subtitle>Behind the scenes</md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <section class=\"mat-typography\">\n                    Leaflet: An open-source JavaScript library for mobile-friendly interactive maps\n                </section>\n            </md-card-content>\n        </md-card>\n    </md-grid-tile>\n    <md-grid-tile>\n        <md-card class=\"info-card\">\n            <md-card-header>\n                <md-card-title>\n                    <md-icon class=\"card-header\">message</md-icon>\n                </md-card-title>\n                <md-card-subtitle>Template Based</md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <section class=\"mat-typography\">\n                    Your templates end up with a concise, readable and maintainable code that pretty much explains itself.\n                </section>\n            </md-card-content>\n        </md-card>\n    </md-grid-tile>\n    <md-grid-tile>\n        <md-card class=\"info-card\">\n            <md-card-header>\n                <md-card-title>\n                    <md-icon class=\"card-header\">developer_board</md-icon>\n                </md-card-title>\n                <md-card-subtitle>Components</md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <section class=\"mat-typography\">\n                Native Angular Components designed to be used directly on the templates without much customization\n                </section>\n            </md-card-content>\n        </md-card>\n    </md-grid-tile>\n</md-grid-list>\n\n<button [routerLink]=\"['/main']\" color=\"primary\" class=\"ribbon-2\" md-raised-button>Check Examples</button>"

/***/ }),

/***/ "../../../../../src/app/intro-view/intro-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var IntroViewComponent = /** @class */ (function () {
    function IntroViewComponent() {
    }
    IntroViewComponent = __decorate([
        core_1.Component({
            selector: 'intro-view',
            template: __webpack_require__("../../../../../src/app/intro-view/intro-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/intro-view/intro-view.component.css")],
        })
    ], IntroViewComponent);
    return IntroViewComponent;
}());
exports.IntroViewComponent = IntroViewComponent;
//# sourceMappingURL=intro-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-view/main-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.sidenav-content {\n  margin-top: 172px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n}\n\n.outer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.inner {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n\nmd-list {\n  padding-top: 256px;\n}\n\nmd-list-item {\n  height: 400px;\n}\n\nmd-card {\n  width: 100%;\n  height: 300px;\n}\n\nmd-card-content {\n  height: 200px;\n}\n\n:host /deep/ .map-container {\n  top: 80px !important;\n  height: 220px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-view/main-view.component.html":
/***/ (function(module, exports) {

module.exports = "<toolbar-element></toolbar-element>\n\n<div class=\"outer\">\n  <div class=\"inner\">\n    <md-list>\n      <md-list-item>\n        <md-card>\n          <md-card-header>\n            <md-card-title>Basic example</md-card-title>\n            <md-card-subtitle>Basic Implementation</md-card-subtitle>\n          </md-card-header>\n          <md-card-content>\n            <basic-map></basic-map>\n          </md-card-content>\n          <md-card-actions>\n            <button (click)=\"fullscreen('basic')\" md-button>Full Screen</button>\n          </md-card-actions>\n        </md-card>\n      </md-list-item>\n\n      <md-list-item>\n        <md-card>\n          <md-card-header>\n            <md-card-title>cartesian coordinate system</md-card-title>\n            <md-card-subtitle>Star Map using L.CRS.Simple</md-card-subtitle>\n          </md-card-header>\n          <md-card-content>\n            <simple-element></simple-element>\n          </md-card-content>\n          <md-card-actions>\n            <button (click)=\"fullscreen('simple')\" md-button>Full Screen</button>\n          </md-card-actions>\n        </md-card>\n      </md-list-item>\n\n      <md-list-item>\n        <md-card>\n          <md-card-header>\n            <md-card-title>Custom Projection</md-card-title>\n            <md-card-subtitle>Custom Projection using EPSG:2100</md-card-subtitle>\n          </md-card-header>\n          <md-card-content>\n            <custom-projection></custom-projection>\n          </md-card-content>\n          <md-card-actions>\n            <button (click)=\"fullscreen('projection')\" md-button>Full Screen</button>\n          </md-card-actions>\n        </md-card>\n      </md-list-item>\n\n      <md-list-item>\n        <md-card>\n          <md-card-header>\n            <md-card-title>Travelling salesman</md-card-title>\n            <md-card-subtitle>Basic implementation of a genetic like algorithm trying to solve the Travelling salesman problem </md-card-subtitle>\n          </md-card-header>\n          <md-card-content>\n            <random-points></random-points>\n          </md-card-content>\n          <md-card-actions>\n            <button (click)=\"fullscreen('random')\" md-button>Full Screen</button>\n          </md-card-actions>\n        </md-card>\n      </md-list-item>\n    </md-list>\n  </div>\n  <div class=\"inner\">\n    <md-list>\n      <md-list-item>\n        <md-card>\n          <md-card-header>\n            Template\n          </md-card-header>\n          <md-card-content>\n            <pre>\n                  <code>\n                    {{getTemplate('bm')}}\n                  </code>\n            </pre> * missing value\n          </md-card-content>\n        </md-card>\n      </md-list-item>\n\n      <md-list-item>\n        <md-card>\n          <md-card-header>\n            Template\n          </md-card-header>\n          <md-card-content>\n            <pre>\n                      <code>\n                        {{getTemplate('ss')}}\n                      </code>\n                </pre> * missing value\n          </md-card-content>\n        </md-card>\n      </md-list-item>\n\n      <md-list-item>\n        <md-card>\n          <md-card-header>\n            Template\n          </md-card-header>\n          <md-card-content>\n            <pre>\n                      <code>\n                        {{getTemplate('cp')}}\n                      </code>\n                </pre> * missing value <br> $ coordinates in custom projection\n\n          </md-card-content>\n        </md-card>\n      </md-list-item>\n\n      <md-list-item>\n        <md-card>\n          <md-card-header>\n            Template\n          </md-card-header>\n          <md-card-content>\n            <pre>\n                      <code>\n                        {{getTemplate('rnd')}}\n                      </code>\n                </pre> * missing value\n          </md-card-content>\n        </md-card>\n      </md-list-item>\n    </md-list>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-view/main-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var MainViewComponent = /** @class */ (function () {
    function MainViewComponent(router) {
        this.router = router;
    }
    MainViewComponent.prototype.ngOnInit = function () { };
    MainViewComponent.prototype.fullscreen = function (where) {
        this.router.navigate([where]);
    };
    MainViewComponent.prototype.getTemplate = function (type) {
        if (type === "bm") {
            return "\n        <leaf-element [zoom]=* [layerControl]=*>\n            <layer-element [slippyLayer]=\"*\">\n            </layer-element>\n            <layer-element [wmsLayer]=\"*\" [name]=\"*\" [opacity]=*>\n            </layer-element>\n            <leaflet-group>\n                <circle-element [lat]=* [lon]=* [radius]=*></circle-element>\n                <circle-element [lat]=* [lon]=* [radius]=* [Options]=\"{*}\">\n                </circle-element>\n            </leaflet-group>\n            <polygon-element [latlngs]=\"[[*],[*], [*], [*]]\">\n            </polygon-element>\n        </leaf-element>";
        }
        if (type === "ss") {
            return "\n            <leaf-element class=\"*\" [zoom]=* crs=L.CRS.Simple [x]=0 [y]=0>\n                <circle-element *ngFor=\"let *; of:*;\" [mouseover]='*'\n                 [lat]='*' [lon]='*' [radius]='*' [Options]='*'>\n                </circle-element>\n            </leaf-element>\n            \n            \n\n\n\n\n            ";
        }
        if (type === "cp") {
            return "\n            <leaf-element [x]=$ [y]=$ [zoom]=* [minZoom]=* [layerControl]=*\n             [crs]='*' [layerControl]=*>\n                <layer-element [name]=\"*\" [type]=\"'basemap'\" [wmsLayer]=\"*\">\n                </layer-element>\n                <circle-element [x]=$ [y]=$ [mouseover]=\"*\"></circle-element>\n                <polygon-element [xys]=\"[[$], [$], [$], [$]]\" [onclick]=\"*\">\n                </polygon-element>\n                <coordinate-control [crs]='system'></coordinate-control>\n                <leaflet-group [name]=\"*\">\n                    <geojson-element [geojson]=*></geojson-element>\n                </leaflet-group>\n        </leaf-element>";
        }
        if (type === "rnd") {
            return "\n            <leaf-element [zoom]=11 [layerControl]=true>\n                <layer-element [name]=\"*\" [type]=\"'basemap'\" [slippyLayer]=\"*\">\n                </layer-element>\n                <leaflet-group>\n                    <circle-element *ngFor=\"let *; of:*;\" [lat]='*' [lon]='*'>\n                    </circle-element>\n                    <polyline-element [latlngs]=\"*\" [Options]=\"*\">\n                    </polyline-element>\n                </leaflet-group>\n            </leaf-element>\n\n            ";
        }
    };
    MainViewComponent = __decorate([
        core_1.Component({
            selector: 'main-view',
            template: __webpack_require__("../../../../../src/app/main-view/main-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-view/main-view.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
    ], MainViewComponent);
    return MainViewComponent;
    var _a;
}());
exports.MainViewComponent = MainViewComponent;
//# sourceMappingURL=main-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/random/random.points.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n    height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/random/random.points.html":
/***/ (function(module, exports) {

module.exports = "<leaf-element [zoom]=11 [layerControl]=true>\n    <layer-element [name]=\"'carto'\" [type]=\"'basemap'\" [slippyLayer]=\"'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'\"></layer-element>\n    <leaflet-group>\n        <generate-points></generate-points>\n    </leaflet-group>\n</leaf-element>"

/***/ }),

/***/ "../../../../../src/app/random/random.points.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var RandomPoints = /** @class */ (function () {
    function RandomPoints() {
    }
    RandomPoints = __decorate([
        core_1.Component({
            selector: 'random-points',
            template: __webpack_require__("../../../../../src/app/random/random.points.html"),
            styles: [__webpack_require__("../../../../../src/app/random/random.points.css")],
        })
    ], RandomPoints);
    return RandomPoints;
}());
exports.RandomPoints = RandomPoints;
//# sourceMappingURL=random.points.js.map

/***/ }),

/***/ "../../../../../src/app/services/annotation.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AnnotationService = /** @class */ (function () {
    function AnnotationService() {
    }
    AnnotationService.prototype.getAnnotation = function (typeOrFunc) {
        // Prefer the direct API.
        if (typeOrFunc.annotations) {
            var annotations = typeOrFunc.annotations;
            if (typeof annotations === 'function' && annotations.annotations) {
                annotations = annotations.annotations;
            }
            return annotations[0];
        }
        // API of tsickle for lowering decorators to properties on the class.
        if (typeOrFunc.decorators) {
            return this.convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators)[0];
        }
        // API for metadata created by invoking the decorators.
        if (this.Reflect && this.Reflect.getOwnMetadata) {
            return this.Reflect.getOwnMetadata('annotations', typeOrFunc)[0];
        }
        return null;
    };
    AnnotationService.prototype.convertTsickleDecoratorIntoMetadata = function (decoratorInvocations) {
        if (!decoratorInvocations) {
            return [];
        }
        return decoratorInvocations.map(function (decoratorInvocation) {
            var decoratorType = decoratorInvocation.type;
            var annotationCls = decoratorType.annotationCls;
            var annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
            return new (annotationCls.bind.apply(annotationCls, [void 0].concat(annotationArgs)))();
        });
    };
    AnnotationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AnnotationService);
    return AnnotationService;
}());
exports.AnnotationService = AnnotationService;
//# sourceMappingURL=annotation.service.js.map

/***/ }),

/***/ "../../../../../src/app/simple/simple.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n    height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/simple/simple.component.html":
/***/ (function(module, exports) {

module.exports = "<leaf-element class=\"custombackground\" [zoom]=-4 crs=L.CRS.Simple [x]=0 [y]=0>\n    <circle-element *ngFor=\"let star; of:stars;\" [mouseover]='star.name' [lat]='star.y' [lon]='star.x' [radius]='star.mag/100'\n        [Options]='star.options'> </circle-element>\n</leaf-element>"

/***/ }),

/***/ "../../../../../src/app/simple/simple.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Simple = /** @class */ (function () {
    function Simple() {
        this.stars = [
            { name: "Sol", x: 0, y: 0, mag: 4.85, options: { color: '#FF851B', fillColor: '#FFDC00' } },
            { name: "Gl 447", x: 0, y: 2.9, mag: 13.50256408, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Luyten\'s Star", x: -3.2, y: 0.7, mag: 11.95192438, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Lacaille 8760", x: 2.8, y: -2.8, mag: 8.688775957, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-12°4523", x: 3.9, y: 1.7, mag: 11.93080683, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 674", x: 4.3, y: -0.5, mag: 11.0863535, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 832", x: 3.3, y: -3.6, mag: 10.20244681, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 682", x: 4.9, y: -0.6, mag: 12.43683257, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+15°2620", x: 1.6, y: 5.2, mag: 9.785622766, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Hip 33226", x: -5.3, y: 1.4, mag: 11.18222855, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Hip 103039", x: 3.9, y: -3.1, mag: 12.71214588, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-03°1123", x: -4.8, y: -1.9, mag: 9.184105973, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-21°1377", x: -3.6, y: -1.8, mag: 9.332614061, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 693", x: 5.1, y: -1.5, mag: 11.92865199, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 588", x: 5.2, y: 1.2, mag: 10.44325725, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-11°3759", x: 4.1, y: 4.2, mag: 12.37772159, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Delta Pavonis", x: 4.5, y: -3.3, mag: 4.630641309, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 784", x: 5.2, y: -3.4, mag: 9.00642103, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-07°4003", x: 4.8, y: 4, mag: 11.5740757, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+45°2505", x: 1.6, y: 3.7, mag: 10.95562057, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 408", x: -2.3, y: 6, mag: 10.91430944, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 625", x: 0.6, y: 4.5, mag: 11.02821769, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 829", x: 2.2, y: -2.7, mag: 11.15555933, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+15°4733", x: 0.3, y: -4.3, mag: 9.480879683, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+01°2447", x: -2.1, y: 5.3, mag: 10.34395388, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Beta Hydri", x: 3.3, y: -4.8, mag: 3.431955958, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+04°123", x: -2.1, y: -6.3, mag: 6.376172096, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-20°4123", x: 5.8, y: 4, mag: 8.629519842, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+11°2576", x: 2.2, y: 7.2, mag: 9.638344703, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 480.1", x: 3.7, y: 2.5, mag: 12.81838533, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+02°3312", x: 6.6, y: 2.6, mag: 8.092019464, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-03°2870", x: -2.5, y: 5.1, mag: 9.805880195, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-03°4233", x: 7, y: 1.2, mag: 9.920794756, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 257", x: -2.1, y: -2.4, mag: 11.97793873, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 793", x: -1.3, y: 2.1, mag: 11.05529395, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+18°3421", x: 5.5, y: 3.3, mag: 10.06987861, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 884", x: 2.8, y: -7.3, mag: 8.325991834, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 486", x: 1.2, y: 7.8, mag: 11.80787985, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "8 Beta Canum Venaticorum", x: -1.5, y: 8.1, mag: 4.656112552, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-21°1051", x: -5.3, y: -4.6, mag: 8.807970526, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "61 Virginis", x: 4.1, y: 5.9, mag: 5.086490061, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Zeta Tucanae", x: 3.3, y: -6.8, mag: 4.549391764, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+36°2219", x: -2.2, y: 8.3, mag: 10.06944403, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 203", x: -8.2, y: -2.1, mag: 12.78424437, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-05°1844", x: -6.9, y: -0.3, mag: 6.892355964, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 785", x: 7.4, y: -4.3, mag: 6.001724444, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-05°5715", x: 3.5, y: -6.2, mag: 10.65395274, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 357", x: -2.3, y: 3.4, mag: 11.15462087, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 433", x: 2.1, y: 4.2, mag: 10.04975709, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "GJ 2066", x: -6.4, y: 3, mag: 10.29170967, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "43 Beta Comae Berenices", x: 0.5, y: 9.1, mag: 4.451709668, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 190", x: -6.2, y: -4.7, mag: 10.45299861, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 3325", x: -6.3, y: -4.8, mag: 11.85430208, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 226", x: -5.6, y: 4, mag: 10.63532031, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+18°683", x: -9, y: -2.8, mag: 10.07980455, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 358", x: -0.3, y: 1.4, mag: 10.86296657, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+43°2796", x: 2.9, y: 4.8, mag: 10.58399702, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 3135", x: -1.8, y: -9.1, mag: 12.26914196, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 479", x: 4.9, y: 1.8, mag: 10.7455408, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+33°2777", x: 4.3, y: 6.3, mag: 8.160439235, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 680", x: 9.2, y: -1.5, mag: 10.19937817, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+05°3409", x: 8.2, y: 3.5, mag: 9.303688369, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Alpha Mensae", x: 2.4, y: -4.9, mag: 5.04806279, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+61°195", x: -5.7, y: -0.1, mag: 9.547805578, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+62°1325", x: -2, y: 8.2, mag: 6.467517851, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+52°857", x: -9.1, y: 0.7, mag: 8.568787698, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 436", x: -2.3, y: 9.9, mag: 10.62013949, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 453", x: 2.7, y: 5.7, mag: 6.939672749, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 487", x: -3.5, y: 7.9, mag: 10.85923027, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-01°2892", x: 5.2, y: 8.4, mag: 9.661883799, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Hip 117828", x: 4.7, y: -6.7, mag: 9.955637426, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+25°3173", x: 5.8, y: 6, mag: 9.581618885, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+00°4810", x: 3.8, y: -6.7, mag: 9.113410899, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Iota Persei", x: -8.5, y: -1.4, mag: 3.937017404, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 341", x: 1.7, y: -1.3, mag: 9.397058913, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+63°869", x: -6.4, y: 7.3, mag: 8.897741874, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 431", x: 2.9, y: 3.5, mag: 11.41910715, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 3412", x: -8.8, y: 4.3, mag: 10.92610123, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 413.1", x: 0.8, y: 5.8, mag: 10.29545107, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+03°3465", x: 9, y: 3.2, mag: 6.370804215, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 4333", x: -0.6, y: -7, mag: 11.57405805, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+10°1032", x: -10.2, y: -0.8, mag: 10.41703778, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+00°2989", x: 2.7, y: 9.5, mag: 8.326569591, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 660", x: 9.5, y: 3.9, mag: 11.88258588, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 145", x: -2, y: -8.7, mag: 11.30011896, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+36°2393", x: 0.6, y: 10.6, mag: 8.85232023, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 3459", x: -5.9, y: 0.1, mag: 11.5224767, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "GJ 1148", x: -3.7, y: 10.3, mag: 11.68707857, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-11°916", x: -8.1, y: -6.3, mag: 10.13675479, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "54 Piscium", x: -4.1, y: -7.4, mag: 5.621936251, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+38°3095", x: 4.2, y: 4.5, mag: 6.173864948, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+05°3993", x: 8.6, y: 0.2, mag: 8.991695043, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 79", x: -2.7, y: -10.7, mag: 8.675310348, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 370", x: 0.3, y: 1.6, mag: 7.403235849, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 70", x: -5.2, y: -9.3, mag: 10.67353154, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 4070", x: 5.3, y: 3.1, mag: 10.99586523, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+11°878", x: -10.8, y: -2.2, mag: 8.519944375, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 361", x: -6.3, y: 7.8, mag: 10.09389341, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 851", x: 2, y: -5.8, mag: 9.928054011, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 902", x: 5.3, y: -7.8, mag: 6.785493115, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 3804", x: 6.5, y: 7.8, mag: 11.57574065, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Hip 29052", x: -6.6, y: -4, mag: 11.58351184, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "GJ 1075", x: -0.6, y: -6.9, mag: 8.711597717, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 118", x: 1.7, y: -8.6, mag: 11.07534875, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+21°652", x: -10.9, y: -3.6, mag: 7.97183523, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+44°4548", x: -4.6, y: -3.2, mag: 9.627097017, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "VV Lyncis", x: -10.5, y: 4.5, mag: 10.28133696, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 362", x: -7, y: 7.3, mag: 10.90984501, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Hip 48659", x: -1.6, y: 4.1, mag: 11.74407604, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+22°2302", x: -3.9, y: 10.5, mag: 9.266423862, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+45°2247", x: 1.4, y: 10, mag: 8.789322567, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "24 Iota Pegasi", x: 1.4, y: -4.8, mag: 3.408626892, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Hip 69454", x: 8.1, y: 0.9, mag: 9.847605503, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 842", x: 7.3, y: -8.6, mag: 9.378107274, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+47°612", x: -8.7, y: -2.5, mag: 9.029586116, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 179", x: -10.9, y: -4.7, mag: 11.5627961, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 798", x: 9.3, y: -7.4, mag: 8.404111423, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 309", x: -3.7, y: 1.1, mag: 5.963037839, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+27°1348", x: -11.6, y: 3.6, mag: 10.3937651, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 381", x: -4, y: 8.1, mag: 10.17858227, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 671", x: 4, y: 6.9, mag: 10.91188886, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 180", x: -8.2, y: -6.9, mag: 10.43947418, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "55 Rho 1 Cancri", x: -9.5, y: 7.7, mag: 5.460014457, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-09°3070", x: -2.6, y: 7.8, mag: 9.687349143, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 435", x: 4.1, y: 3.6, mag: 7.283005653, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 806", x: 1.3, y: 0.2, mag: 10.28572135, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "GJ 1097", x: -9.5, y: 1.5, mag: 10.9359289, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-12°2449", x: -7.1, y: 2.8, mag: 5.471289292, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+41°328", x: -8.1, y: -4.2, mag: 4.440607878, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 737", x: 11, y: -4.9, mag: 8.94198023, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Hip 84051", x: 11.4, y: -1.7, mag: 9.552654912, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+06°2182", x: -6.8, y: 7.7, mag: 6.684559204, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+67°1014", x: -1.4, y: 7, mag: 5.894367034, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+08°4887", x: 2.4, y: -8.3, mag: 9.832420897, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 3708", x: 3.3, y: 8.5, mag: 11.14436703, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Hip 27887", x: -0.2, y: -6.5, mag: 6.629080598, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 428", x: 5, y: -0.1, mag: 6.948748876, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-09°3413", x: 1.9, y: 10, mag: 4.99594806, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-03°1110", x: -10.9, y: -4.4, mag: 7.083299489, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 707", x: 12.5, y: -2.6, mag: 7.807523871, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-21°5081", x: 12.6, y: -1.5, mag: 5.293017571, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 114.1", x: 0.1, y: -10.8, mag: 10.13688745, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 46", x: -0.2, y: -13.1, mag: 11.18319181, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+02°4076", x: 9.1, y: -3.2, mag: 6.871484005, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+27°4120", x: 2.4, y: -4.1, mag: 9.286067081, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+57°2735", x: -4.8, y: -0.7, mag: 9.450629599, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 3403", x: -1.1, y: -5.3, mag: 9.357455451, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 3452", x: -11, y: 6.2, mag: 10.70290727, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-18°4986", x: 12.8, y: -1, mag: 6.205766231, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+46°1889", x: -0.8, y: 12.4, mag: 9.617720539, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "GJ 1267", x: 7.7, y: -10.5, mag: 8.428055985, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 146", x: -1.7, y: -10.5, mag: 7.971249114, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+09°2636", x: 1.3, y: 12.7, mag: 9.063111895, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+63°229", x: -8.4, y: 0.4, mag: 7.76932351, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+31°3767", x: 5.1, y: 0.8, mag: 9.522409088, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 130.1", x: -10.5, y: 0.1, mag: 10.27465179, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+36°1970", x: -9.1, y: 9.9, mag: 9.532634434, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "25 Theta Ursae Majoris", x: -9.1, y: 9.6, mag: 2.520555777, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 868", x: 6.1, y: -11.9, mag: 7.161752498, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 469", x: 1.2, y: 12.8, mag: 11.39939892, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 853", x: 7.9, y: -10.6, mag: 4.720550199, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 4040", x: 3.4, y: 6.4, mag: 11.12881012, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 133", x: -8.2, y: 4.5, mag: 10.5106569, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "10 Tauri", x: -10.2, y: -9.1, mag: 3.593339751, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+62°780", x: -11.4, y: 3.9, mag: 8.337803823, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 386", x: -3.1, y: 8, mag: 10.2903586, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+27°2296", x: 2.5, y: 13.3, mag: 6.934038145, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 813", x: 4.9, y: -3.5, mag: 11.33374168, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Hip 19337", x: -12.8, y: -3.2, mag: 9.496911742, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 816", x: 8.6, y: -7.3, mag: 10.52779286, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-07°4156", x: 11.8, y: 7.4, mag: 9.781831618, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 739", x: 12.7, y: -5, mag: 10.43877261, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Wo 9773", x: 3.7, y: -8.5, mag: 11.28575751, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Hip 52596", x: 0.7, y: 5.8, mag: 10.51238521, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 104", x: -10.1, y: -8.3, mag: 9.934565112, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+50°2030", x: -1.1, y: 12.6, mag: 8.16818691, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "18 Scorpii", x: 12.2, y: 6.8, mag: 4.755447649, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-07°5871", x: 3.7, y: -11.5, mag: 9.119403251, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+39°2376", x: -6.8, y: 12.4, mag: 8.552312164, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 42", x: 0.4, y: -14.1, mag: 6.426597563, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 685", x: -0.2, y: 7.6, mag: 9.224761999, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-03°4380", x: 12.3, y: -0.2, mag: 8.060166288, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 512", x: 5.6, y: 12.2, mag: 10.56463857, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 3564", x: -8.7, y: 10.6, mag: 11.29371591, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+17°917", x: -14, y: -2.6, mag: 7.16803236, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+16°2404", x: 1.1, y: 14, mag: 7.18362814, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 3148", x: -3, y: -13.5, mag: 11.2304479, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Wo 9724", x: 10.4, y: -9.8, mag: 11.22803236, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-02°2198", x: -10.7, y: 2.1, mag: 9.090832052, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+30°2512", x: 3.5, y: 13.5, mag: 7.757735826, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 613", x: 12.1, y: -0.9, mag: 6.324917351, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 3438", x: -13.4, y: 5.3, mag: 9.530844246, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD-08°2582", x: -6.9, y: 6.1, mag: 8.699835092, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+04°4157", x: 10.7, y: -1.9, mag: 8.557075963, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "NN 3892", x: 9.5, y: 11, mag: 10.65393072, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+25°613", x: -13, y: -5.5, mag: 8.792253569, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 781.1", x: 12.6, y: -7.1, mag: 11.42813583, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 796", x: 11.3, y: -8.1, mag: 5.531467562, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Hip 52190", x: 1.5, y: 4.5, mag: 10.19464548, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 604", x: 13.2, y: 2.1, mag: 7.218284984, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 833", x: 9.9, y: -10.7, mag: 6.29774926, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+01°543", x: -10.2, y: -10.7, mag: 8.24262257, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 865", x: 8.1, y: -10.7, mag: 10.62458781, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "GJ 2128", x: 11.8, y: 6.2, mag: 10.61777966, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+02°1729", x: -11.7, y: 3, mag: 8.749107138, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Hip 79431", x: 13.7, y: 5.8, mag: 10.47458324, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 838.6", x: 9.5, y: -11.6, mag: 11.08166422, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 40", x: -0.6, y: -15.2, mag: 8.051459454, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Gl 258", x: -11.5, y: 6.8, mag: 11.03921645, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "BD+55°1519", x: -5.1, y: 13.5, mag: 8.864233343, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
            { name: "Mu Arae", x: 14.1, y: -3, mag: 4.219880005, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } }
        ];
    }
    Simple = __decorate([
        core_1.Component({
            selector: 'simple-element',
            template: __webpack_require__("../../../../../src/app/simple/simple.component.html"),
            styles: [__webpack_require__("../../../../../src/app/simple/simple.component.css")],
        })
    ], Simple);
    return Simple;
}());
exports.Simple = Simple;
//# sourceMappingURL=simple.component.js.map

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.element.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    position: fixed;\n    width: 100%;\n    z-index: 10;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.element.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n    <button [routerLink]=\"['/']\" md-button>\n            <md-icon>home</md-icon>\n        </button>\n    <div style=\"flex:1\"></div>\n    <!-- <button md-button>\n            <md-icon>search</md-icon>\n        </button> -->\n</md-toolbar>"

/***/ }),

/***/ "../../../../../src/app/toolbar/toolbar.element.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ToolbarElement = /** @class */ (function () {
    function ToolbarElement() {
    }
    ToolbarElement = __decorate([
        core_1.Component({
            selector: 'toolbar-element',
            template: __webpack_require__("../../../../../src/app/toolbar/toolbar.element.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbar/toolbar.element.css")],
        })
    ], ToolbarElement);
    return ToolbarElement;
}());
exports.ToolbarElement = ToolbarElement;
//# sourceMappingURL=toolbar.element.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
console.log(environment_1.environment);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map