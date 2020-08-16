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
  value: string;
  valor: string;

  constructor(private servicioService: ServicioService) { }

  async ngOnInit() {
    try {
      this.posts = await this.servicioService.getAllPost();
      console.log(this.posts);
    } catch (error) {
      console.log(error);
    }
  }

  async onFiltro(value) {
    try {
      if (value === "todos") {
        this.posts = await this.servicioService.getAllPost();
      } else {
        this.posts = await this.servicioService.getPostsByCategoria(value);
        console.log(value);
      }
    } catch (error) {
      console.log(error);
    }
  }



}
