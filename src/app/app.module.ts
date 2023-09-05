import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainIndexComponent } from './main-index/main-index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticleComponent } from './article/article.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { TodayCourseComponent } from './today-course/today-course.component';
import { CodespacesComponent } from './codespaces/codespaces.component';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainIndexComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ArticleComponent,
    SearchProductComponent,
    CourseComponent,
    TodayCourseComponent,
    CodespacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
