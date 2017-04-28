import { Component } from '@angular/core'
import { RouteParams } from '@angular/router-deprecated'

@Component({
    selector: 'course',
    template: `
<h2>month:{{month}}</h2><br/>
<h2>year:{{year}}</h2>

`
})
export class CourseComponent {
    month;
    year;
    constructor(private _routeParams: RouteParams) {
        this.month = this._routeParams.get("month");
        this.year = this._routeParams.get("year")
    }
 
}