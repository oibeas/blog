import { Component } from '@angular/core';
import { ServicioService } from './servicio.service';
import { Post } from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Post[];

  constructor(private servicioService: ServicioService) {


    // onFiltro(){
    //   this.posts = this.servicioService.getPostsByCategoria();


    //   try {
    //     this.posts = await this.servicioService.getPostsByCategoria($event);
    //     console.log(this.posts);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }



  }

}


