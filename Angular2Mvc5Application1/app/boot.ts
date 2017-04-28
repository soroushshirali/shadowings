import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'
import { AppServiceTodoList } from './services/app.service.todolist';
import { GitHubService } from './services/GitHub';
import { HTTP_PROVIDERS } from '@angular/http';
import { myAppComponent } from './components/myApp.component';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated'

//enableProdMode();
bootstrap(myAppComponent, [HTTP_PROVIDERS, AppServiceTodoList, GitHubService, ROUTER_PROVIDERS]);  