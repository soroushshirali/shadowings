import { Component,OnInit } from '@angular/core'
import { GitHubService } from '../services/GitHub';

@Component({
    selector: "git-hub",
    templateUrl: 'app/components/gitHubTemplate.html',
    styles: [        `.avatar{
           width:100px;	height:100px;  border-radius:100%;
 }
` ]
})
export class gitHubComponent implements OnInit {
    isLoading: boolean = true;
    userInfo=null;
    constructor(private _gitHubService: GitHubService) {

    }

    ngOnInit() {
        this._gitHubService.getPersonWithFollowers()
            .subscribe(x => this.userInfo = x.userInfo, null, () => this.isLoading = false);
    }
}