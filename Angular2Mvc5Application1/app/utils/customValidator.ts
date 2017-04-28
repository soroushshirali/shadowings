import { ControlGroup } from '@angular/common'

export class CustomValidator{
    static repeatPass(group: ControlGroup) {
        if (group.controls["newPassword"].value == group.controls["newPasswordRepeat"].value) {
            return null;
        } else {
            return { repeatPass: true };
        }
    }
}