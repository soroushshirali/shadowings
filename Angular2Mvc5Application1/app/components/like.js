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
var LikeComponent = (function () {
    function LikeComponent() {
        this.likeClicked = new core_1.EventEmitter();
    }
    LikeComponent.prototype.onClick = function () {
        this.likeClicked.emit({ course: this.course });
    };
    return LikeComponent;
}());
__decorate([
    core_1.Input("course"),
    __metadata("design:type", courses_1.Course)
], LikeComponent.prototype, "course", void 0);
__decorate([
    core_1.Output("like-clicked"),
    __metadata("design:type", Object)
], LikeComponent.prototype, "likeClicked", void 0);
LikeComponent = __decorate([
    core_1.Component({
        selector: "like",
        template: "\n      <i class=\"glyphicon glyphicon-heart\" style=\"cursor:pointer;\" (click)=\"onClick()\">{{course.likes}}</i>\n    "
    })
], LikeComponent);
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.js.map