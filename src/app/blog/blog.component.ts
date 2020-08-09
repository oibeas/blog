import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service'
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private servicioService: ServicioService) { }

  async ngOnInit() {
    try {
      this.posts = await this.servicioService.getAllPost();
      console.log(this.posts);

    } catch (error) {
      console.log(error);

    }
  }

}
