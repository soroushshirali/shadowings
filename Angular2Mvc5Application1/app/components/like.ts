import { Component, Input, Output, EventEmitter } from '@angular/core'
import {  Course } from './../services/courses'

@Component({
    selector: "like",
    template: `
      <i class="glyphicon glyphicon-heart" style="cursor:pointer;" (click)="onClick()">{{course.likes}}</i>
    `
})
export class LikeComponent {
    @Input("course") course: Course ;
    @Output("like-clicked") likeClicked = new EventEmitter();
    onClick(): void {
        this.likeClicked.emit({ course: this.course })
    }
}