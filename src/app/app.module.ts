import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { MainComponent } from './main/main.component';
import { BlogsDetailsComponent } from './main/blogs-details/blogs-details.component';
import { NewBlogComponent } from './main/new-blog/new-blog.component';
import { HelpComponent } from './help/help.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {BlogsService} from './main/blogs.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {StartComponent} from './main/blogs-details/start/start.component';
import { LoginComponent } from './login/login.component';
import {BlogsGuardService} from './blogs-guard.service';
import {LoginService} from './login.service';

const approutes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home/:username/:password', canActivate: [BlogsGuardService], component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'help', component: HelpComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BlogsDetailsComponent,
    NewBlogComponent,
    HelpComponent,
    NavBarComponent,
    StartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [BlogsService, BlogsGuardService, LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

