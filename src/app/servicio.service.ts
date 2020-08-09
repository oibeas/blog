import { Injectable } from '@angular/core';
import { Post } from './models/Post.model'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  arrPost: Post[];

  constructor() {

    this.arrPost = [
      new Post('Objetivos', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ex nulla dicta natus illo placeat tempore expedita nisi facilis, consequuntur, iste voluptate nihil rerum quos recusandae esse ad perspiciatis neque.', 'oibeas', 'https://www.pablopando.com/blog/wp-content/uploads/2018/08/Helios-44-M-4.jpg', '05/07/2020', 'Objetivos'),
      new Post('Consejos', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ex nulla dicta natus illo placeat tempore expedita nisi facilis, consequuntur, iste voluptate nihil rerum quos recusandae esse Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ex nulla dicta natus illo placeat tempore expedita nisi facilis, consequuntur, iste voluptate nihil rerum quos recusandae es ad perspiciatis neque.', 'oibeas', 'https://img.static-kl.com/images/media/3481758C-BC6A-4535-93EF6A424E530F79', '19/07/2020', 'Consejos'),
      new Post('Modelos', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ex nulla dicta natus illo placeat tempore expedita nisi facilis, consequuntur, iste voluptate nihil rerum quos recusandae esse ad perspiciatis neque.', 'oibeas', 'https://img3.woman.es/e8/09/47/charlize-theron-640.jpg', '25/07/2020', 'Modelos'),
      new Post('Accesorios', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ex nulla dicta natus illo placeat tempore expedita nisi facilis, consequuntur, iste voluptate nihil rerum quos recusandae esse ad perspiciatis neque.', 'oibeas', 'https://bachimport.files.wordpress.com/2019/06/fomex.jpg', '04/08/2020', 'Accesorios'),
      new Post('Retratos', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ex nulla dicta natus illo placeat tempore expedita nisi facilis, consequuntur, iste voluptate nihil rerum quos recusandae esse ad perspiciatis neque.', 'oibeas', 'https://d500.epimg.net/cincodias/imagenes/2019/05/28/lifestyle/1559073183_258744_1559073333_noticia_normal.jpg', '09/08/2020', 'Retratos'),
    ]

  }

  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost)
    });
  }

}
