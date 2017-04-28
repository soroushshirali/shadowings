import { Http } from "@angular/http"
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GitHubService {
    constructor(private _http: Http) {

    }

    getPersonWithFollowers(): Observable<GitHubInfo> {
        var userObserver = this._http.get('https://api.github.com/users/octocat').map(x => x.json());
        var followersObserver = this._http.get('https://api.github.com/users/octocat/followers').map(x => x.json());

        return Observable.forkJoin(userObserver, followersObserver).map(x => new GitHubInfo(x[0], x[1]));
    }
}

export class GitHubInfo {
    userInfo: any;
    followersObserver: Array<any>;
    constructor(userInfo, followersObserver) {
        this.userInfo = userInfo;
        this.followersObserver = followersObserver;
    }
}