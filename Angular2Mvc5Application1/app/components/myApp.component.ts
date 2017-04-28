import { Component } from '@angular/core'
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated'

import { gitHubComponent } from './gitHub'
import { UpdatePasswordFormComponent } from './UpdatePasswordForm'
import { CoursesComponent } from './courses'
import { CourseComponent } from './Course'

@RouteConfig([
    { path: 'github', name: 'Github', component: gitHubComponent},
    { path: 'updatePass', name: 'UpdatePass', component: UpdatePasswordFormComponent },
    { path: 'courses', name: 'Courses', component: CoursesComponent },
    { path: 'course/:month/:year', name: 'Course', component: CourseComponent },
    { path: '*other', name: 'Other', redirectTo: ['Courses'] }
])
    @Component({
        selector: 'my-app',
        templateUrl: 'app/components/myAppTemplate.html',
        directives: [ROUTER_DIRECTIVES]
    })
export class myAppComponent{

}