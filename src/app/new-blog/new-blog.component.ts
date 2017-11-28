import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {Router} from "@angular/router";
import {blog} from "../blog";

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {


  blogs:Object[];

  constructor(private request:BlogService, private router:Router) { }

  ngOnInit() {
    this.request.loadBlogs()
      .subscribe((blog:blog[]) => {
        this.blogs=blog;
      })
  }

  createNewPost(blogTitle:string,blogDesc:string,blogCategory:string){

    let newBlog={
      blogTitle:blogTitle,
      blogContent:blogDesc,
      blogCategory:blogCategory,
      blogUserID:Math.floor(Math.random() * (4))+1,
      blogRating:Math.floor(Math.random() * 10) +1
    }
    this.request.postBlog(newBlog)
      .subscribe(() => {
        this.goHome();
      });

  }

  goHome(){
    this.router.navigate(['./home']);
  }

}
