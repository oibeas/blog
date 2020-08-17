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
  indice: number;
  getNoticia: string;

  constructor(private servicioService: ServicioService) {

    this.indice = 0;
    this.getNoticia = 'noticia0';
  }

  async ngOnInit() {
    try {

      while (this.servicioService.get(this.getNoticia) != null) {
        const not = this.servicioService.get(this.getNoticia);
        this.servicioService.agregarPost(not);
        this.indice++;
        this.getNoticia = 'noticia' + this.indice;
      }


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
