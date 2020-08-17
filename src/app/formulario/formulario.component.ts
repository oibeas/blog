import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service'
import { Post } from '../models/Post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  indice: number;
  getNoticia: string;

  constructor(private servicioService: ServicioService, private router: Router) {

    this.indice = 0;
    this.getNoticia = 'noticia0';


  }

  ngOnInit(): void {

    while (this.servicioService.get(this.getNoticia) != null) {

      this.indice++;
      this.getNoticia = 'noticia' + this.indice;
    }


  }

  onSubmit(formValues) {
    console.log(formValues);
    const response = this.servicioService.agregarPost(formValues);
    this.servicioService.set(this.getNoticia, formValues);
    console.log(response);




    this.router.navigate(['/blog']);
  }



}
