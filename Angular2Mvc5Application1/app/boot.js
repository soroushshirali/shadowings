"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_service_todolist_1 = require("./services/app.service.todolist");
var GitHub_1 = require("./services/GitHub");
var http_1 = require("@angular/http");
var myApp_component_1 = require("./components/myApp.component");
var router_deprecated_1 = require("@angular/router-deprecated");
//enableProdMode();
platform_browser_dynamic_1.bootstrap(myApp_component_1.myAppComponent, [http_1.HTTP_PROVIDERS, app_service_todolist_1.AppServiceTodoList, GitHub_1.GitHubService, router_deprecated_1.ROUTER_PROVIDERS]);
//# sourceMappingURL=boot.js.map