import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlogService} from "../blog.service";
import {blog} from "../blog";

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {


  blogId:number;
  sentBlog:blog;
  entityExists:boolean;
  entityWithSomeErrorExists:boolean;
blogRating:number;
  constructor(private route:ActivatedRoute, private blogServiceRequest:BlogService, private router:Router) {}

  ngOnInit() {
    this.blogId=(this.route.snapshot.params['id']);

    this.blogServiceRequest.getBlogById(this.blogId)
      .subscribe((blog:blog) => {
          this.sentBlog=blog;
        },
        (err) => {
          if(err.status==404)
            this.entityExists=false
          else
            this.entityWithSomeErrorExists=true
        }
      );

  }

  editBlogPost(newBlogTitle:string, newBlogContent:string, newBlogCategory:string){
    let tempBlog={
      blogTitle:newBlogTitle,
      blogContent:newBlogContent,
      blogCategory:newBlogCategory,
      id:this.blogId,
      blogUserID:this.sentBlog.blogUserID,
      blogRating:this.sentBlog.blogRating
    }
    this.blogServiceRequest.editBlog(tempBlog)
      .subscribe()
    this.router.navigate(["/fav"]);
  }

  goBack(){
    this.router.navigate(["/home"]);
  }


}
