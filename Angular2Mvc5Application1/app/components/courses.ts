import { Component } from '@angular/core'
import { CoursesService, Course } from './../services/courses'
import { AutoGrowDirective } from './../directives/autoGrow'
import { LikeComponent } from './like'
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated'
 
@Component({
    selector: 'courses',
    template: `
<h2>{{title}}</h2>
<input type="text" style='' autoGrow>
<ul>
<li *ngFor="let course of courses">
<a [routerLink]="['Course',{month:course.month, year: course.year}]">{{course.month}}/{{course.year}}</a>
{{course.name}} <like [course]="course" (like-clicked)="likeCourse($event)"></like>
</li>
</ul>
`,
    providers: [CoursesService],
    directives: [AutoGrowDirective, LikeComponent, ROUTER_DIRECTIVES]

})
export class CoursesComponent {
    title: string = "this is list of courses";
    courses:Course[];
    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }
    likeCourse($event) {
        var pristineCourse = this.courses.find(c => c.name == $event.course.name);
        if (pristineCourse.likes == $event.likes)
            pristineCourse.likes++;        
    }
}