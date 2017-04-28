import { Component } from '@angular/core'

@Component({
    selector: "my-form",
    templateUrl: 'app/components/myFormTemplate.html'
})
export class MyFormComponent {
    log(obj) {
        console.log(obj);
    }
}