import { Component } from '@angular/core'
import { FormBuilder, ControlGroup, Control, Validators } from '@angular/common'
import { Router, CanDeactivate } from '@angular/router-deprecated'
import { CustomValidator } from './../utils/customValidator'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: "update-password-form",
    templateUrl: 'app/components/updatePasswordForm.html'
})
export class UpdatePasswordFormComponent implements CanDeactivate {
    form: ControlGroup;
    constructor(formbuilder: FormBuilder, private _router:Router) {
        this.form = formbuilder.group({
            currentPassword: ['', Validators.compose([Validators.required])],
            newPassword: ['', Validators.required],
            newPasswordRepeat: ['', Validators.required]
        }, { validator: CustomValidator.repeatPass });       
    }

    routerCanDeactivate() {
        if (this.form.dirty)
            return confirm('are you sure');
        else
            return true;
    }

   onSubmit() {
        if (this.form.controls["currentPassword"].value != '44')
           this.form.controls["currentPassword"].setErrors({ "invalidpass": true });
        else {
            this._router.navigate(['Github']);
        }
    }
}