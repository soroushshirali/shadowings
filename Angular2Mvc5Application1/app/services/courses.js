"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoursesService = (function () {
    function CoursesService() {
    }
    CoursesService.prototype.getCourses = function () {
        return [{ name: "metalogy", likes: 12, month: 10, year: 1982 }, { name: "philosophy", likes: 3, month: 3, year: 1977 }];
    };
    return CoursesService;
}());
exports.CoursesService = CoursesService;
var Course = (function () {
    function Course() {
    }
    return Course;
}());
exports.Course = Course;
//# sourceMappingURL=courses.js.map