"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var gitHub_1 = require("./gitHub");
var UpdatePasswordForm_1 = require("./UpdatePasswordForm");
var courses_1 = require("./courses");
var Course_1 = require("./Course");
var myAppComponent = (function () {
    function myAppComponent() {
    }
    return myAppComponent;
}());
myAppComponent = __decorate([
    router_deprecated_1.RouteConfig([
        { path: 'github', name: 'Github', component: gitHub_1.gitHubComponent },
        { path: 'updatePass', name: 'UpdatePass', component: UpdatePasswordForm_1.UpdatePasswordFormComponent },
        { path: 'courses', name: 'Courses', component: courses_1.CoursesComponent },
        { path: 'course/:month/:year', name: 'Course', component: Course_1.CourseComponent },
        { path: '*other', name: 'Other', redirectTo: ['Courses'] }
    ]),
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/components/myAppTemplate.html',
        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
    })
], myAppComponent);
exports.myAppComponent = myAppComponent;
//# sourceMappingURL=myApp.component.js.map