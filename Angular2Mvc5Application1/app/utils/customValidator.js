"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomValidator = (function () {
    function CustomValidator() {
    }
    CustomValidator.repeatPass = function (group) {
        if (group.controls["newPassword"].value == group.controls["newPasswordRepeat"].value) {
            return null;
        }
        else {
            return { repeatPass: true };
        }
    };
    return CustomValidator;
}());
exports.CustomValidator = CustomValidator;
//# sourceMappingURL=customValidator.js.map