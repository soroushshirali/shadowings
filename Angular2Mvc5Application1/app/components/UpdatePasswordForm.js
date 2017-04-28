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
var common_1 = require("@angular/common");
var router_deprecated_1 = require("@angular/router-deprecated");
var customValidator_1 = require("./../utils/customValidator");
require("rxjs/Rx");
var UpdatePasswordFormComponent = (function () {
    function UpdatePasswordFormComponent(formbuilder, _router) {
        this._router = _router;
        this.form = formbuilder.group({
            currentPassword: ['', common_1.Validators.compose([common_1.Validators.required])],
            newPassword: ['', common_1.Validators.required],
            newPasswordRepeat: ['', common_1.Validators.required]
        }, { validator: customValidator_1.CustomValidator.repeatPass });
    }
    UpdatePasswordFormComponent.prototype.routerCanDeactivate = function () {
        if (this.form.dirty)
            return confirm('are you sure');
        else
            return true;
    };
    UpdatePasswordFormComponent.prototype.onSubmit = function () {
        if (this.form.controls["currentPassword"].value != '44')
            this.form.controls["currentPassword"].setErrors({ "invalidpass": true });
        else {
            this._router.navigate(['Github']);
        }
    };
    return UpdatePasswordFormComponent;
}());
UpdatePasswordFormComponent = __decorate([
    core_1.Component({
        selector: "update-password-form",
        templateUrl: 'app/components/updatePasswordForm.html'
    }),
    __metadata("design:paramtypes", [common_1.FormBuilder, router_deprecated_1.Router])
], UpdatePasswordFormComponent);
exports.UpdatePasswordFormComponent = UpdatePasswordFormComponent;
//# sourceMappingURL=UpdatePasswordForm.js.map