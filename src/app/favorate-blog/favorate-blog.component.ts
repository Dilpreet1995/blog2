import { Component, OnInit } from '@angular/core';
import {blog} from "../blog";
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-favorate-blog',
  templateUrl: './favorate-blog.component.html',
  styleUrls: ['./favorate-blog.component.css']
})
export class FavorateBlogComponent implements OnInit {

  blogs:blog[];
  sortedBlogs:blog[];

  constructor(private blogServiceRequest:BlogService) { }

  ngOnInit() {
    this.blogServiceRequest.loadBlogs()
      .subscribe((blog:blog[]) => {
        this.sortedBlogs=blog.sort(function(blogPost1:blog,blogPost2:blog)
        {return blogPost2.blogRating-blogPost1.blogRating});
      })
  }


}
