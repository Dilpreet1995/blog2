import { Component, OnInit } from '@angular/core';
import {BlogService} from "../blog.service";
import {blog} from "../blog";
import {user} from "../user";

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {
blogs:Object[];

  constructor(private _request:BlogService) { }

  ngOnInit() {

    this._request.loadBlogs().subscribe((blog:blog[]) => {this.blogs=blog;});


  }

}
