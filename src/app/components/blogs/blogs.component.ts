import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: any;
  constructor(private api: ApiService) {
    this.blogs = this.api.blogs
  }

  ngOnInit(): void {
  }

}
