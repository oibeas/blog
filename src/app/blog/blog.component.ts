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

  async onFiltro($event) {
    try {
      if ($event.target.value === "todos") {
        this.posts = await this.servicioService.getAllPost();
      } else {
        this.posts = await this.servicioService.getPostsByCategoria($event.target.value);
        console.log(this.posts);
      }
    } catch (error) {
      console.log(error);
    }
  }



}
