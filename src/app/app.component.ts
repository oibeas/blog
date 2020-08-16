import { Component } from '@angular/core';
import { ServicioService } from './servicio.service';
import { Post } from './models/Post.model';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Post[];


  constructor(private servicioService: ServicioService) {




  }
}

