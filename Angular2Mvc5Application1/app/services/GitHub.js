"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var GitHubService = (function () {
    function GitHubService(_http) {
        this._http = _http;
    }
    GitHubService.prototype.getPersonWithFollowers = function () {
        var userObserver = this._http.get('https://api.github.com/users/octocat').map(function (x) { return x.json(); });
        var followersObserver = this._http.get('https://api.github.com/users/octocat/followers').map(function (x) { return x.json(); });
        return Observable_1.Observable.forkJoin(userObserver, followersObserver).map(function (x) { return new GitHubInfo(x[0], x[1]); });
    };
    return GitHubService;
}());
GitHubService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GitHubService);
exports.GitHubService = GitHubService;
var GitHubInfo = (function () {
    function GitHubInfo(userInfo, followersObserver) {
        this.userInfo = userInfo;
        this.followersObserver = followersObserver;
    }
    return GitHubInfo;
}());
exports.GitHubInfo = GitHubInfo;
//# sourceMappingURL=GitHub.js.map