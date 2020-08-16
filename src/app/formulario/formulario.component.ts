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



  constructor(private servicioService: ServicioService, private router: Router) {



  }

  ngOnInit(): void {
  }

  onSubmit(formValues) {
    console.log(formValues);
    const response = this.servicioService.agregarPost(formValues);
    console.log(response);
    this.router.navigate(['/blog']);
  }



}
