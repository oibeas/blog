import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service'
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {



  constructor(private servicioService: ServicioService) {



  }

  ngOnInit(): void {
  }

  onSubmit(formValues) {
    console.log(formValues);
    const response = this.servicioService.agregarPost(formValues);
    console.log(response);
  }

  // onEmpleadoCreado($event) {
  //   this.empleados.push($event);
  //   console.log(this.empleados);
  // }

}
