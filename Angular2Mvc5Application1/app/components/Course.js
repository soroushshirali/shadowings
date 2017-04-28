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
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var CourseComponent = (function () {
    function CourseComponent(_routeParams) {
        this._routeParams = _routeParams;
        this.month = this._routeParams.get("month");
        this.year = this._routeParams.get("year");
    }
    return CourseComponent;
}());
CourseComponent = __decorate([
    core_1.Component({
        selector: 'course',
        template: "\n<h2>month:{{month}}</h2><br/>\n<h2>year:{{year}}</h2>\n\n"
    }),
    __metadata("design:paramtypes", [router_deprecated_1.RouteParams])
], CourseComponent);
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=Course.js.map