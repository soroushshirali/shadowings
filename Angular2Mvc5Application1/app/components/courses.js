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
var courses_1 = require("./../services/courses");
var autoGrow_1 = require("./../directives/autoGrow");
var like_1 = require("./like");
var router_deprecated_1 = require("@angular/router-deprecated");
var CoursesComponent = (function () {
    function CoursesComponent(coursesService) {
        this.title = "this is list of courses";
        this.courses = coursesService.getCourses();
    }
    CoursesComponent.prototype.likeCourse = function ($event) {
        var pristineCourse = this.courses.find(function (c) { return c.name == $event.course.name; });
        if (pristineCourse.likes == $event.likes)
            pristineCourse.likes++;
    };
    return CoursesComponent;
}());
CoursesComponent = __decorate([
    core_1.Component({
        selector: 'courses',
        template: "\n<h2>{{title}}</h2>\n<input type=\"text\" style='' autoGrow>\n<ul>\n<li *ngFor=\"let course of courses\">\n<a [routerLink]=\"['Course',{month:course.month, year: course.year}]\">{{course.month}}/{{course.year}}</a>\n{{course.name}} <like [course]=\"course\" (like-clicked)=\"likeCourse($event)\"></like>\n</li>\n</ul>\n",
        providers: [courses_1.CoursesService],
        directives: [autoGrow_1.AutoGrowDirective, like_1.LikeComponent, router_deprecated_1.ROUTER_DIRECTIVES]
    }),
    __metadata("design:paramtypes", [courses_1.CoursesService])
], CoursesComponent);
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.js.map