import { Component, OnInit } from '@angular/core';
import {blog} from "../blog";
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-filter-blogs',
  templateUrl: './filter-blogs.component.html',
  styleUrls: ['./filter-blogs.component.css']
})
export class FilterBlogsComponent implements OnInit {


  blogs:blog[];
  filteredBlogs:blog[];

  constructor(private blogServiceRequest:BlogService) { }

  ngOnInit() {
    this.blogServiceRequest.loadBlogs()
      .subscribe((blog) => {
        this.blogs=blog;
      })
  }



  startFilter(categoryText:string){
    var blogtitle=categoryText.toLowerCase();
    this.filteredBlogs=this.blogs.filter((tempFilteredBlog:blog)=>(tempFilteredBlog.blogTitle.toLowerCase().includes(blogtitle)||tempFilteredBlog.blogCategory.toLowerCase().includes(blogtitle)));

  }




}
