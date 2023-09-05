import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './auth-module/user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { TodayCourseComponent } from './today-course/today-course.component';
import { CodespacesComponent } from './codespaces/codespaces.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'user-login', pathMatch: 'full'
  },
  {
    path: 'user-login', component: UserLoginComponent
  },
  {
    path: 'header', component: HeaderComponent
  }
  ,
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'courses', component: CourseComponent
  },
  {
    path: 'codespaces', component: CodespacesComponent
  }
  ,
  {
    path:'today-course', component:TodayCourseComponent
  }
  ,
  {
    path: 'user-auth', loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
