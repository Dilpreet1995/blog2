import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { FavorateBlogComponent } from './favorate-blog/favorate-blog.component';
import { FilterBlogsComponent } from './filter-blogs/filter-blogs.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BlogService} from "./blog.service";

@NgModule({
  declarations: [
    AppComponent,
    EditBlogComponent,
    NewBlogComponent,
    FavorateBlogComponent,
    FilterBlogsComponent,
    UserSectionComponent,
    MyBlogsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: MyBlogsComponent},
    {path: "new", component: NewBlogComponent},
    {path: "filter", component: FilterBlogsComponent},
    {path: "fav", component: FavorateBlogComponent},
    {path: "user", component: UserSectionComponent},
    {path: "edit", component: EditBlogComponent, data: {id: '0'}},
    {path: "**", redirectTo: "/home"}
  ]
    )

  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
