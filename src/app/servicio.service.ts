import { Injectable } from '@angular/core';
import { Post } from './models/Post.model'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  arrPost: Post[];

  constructor() {

    this.arrPost = [
      new Post('Objetivos', 'Ahora que controlas la luz y la profundidad de campo, empiezas a cuestionarte el tema objetivos, que si la distancia focal, que si qué objetivos son mejores, que si qué significan todas esas siglas que aparecen en ellos, etc. Aquí tienes las respuestas:      Todo Lo Que Necesitas Saber Sobre La Distancia Focal de Tu Objetivo.      Cómo Captar Espléndidas Composiciones Gracias a la Distancia Focal de tu Objetivo.       Objetivos Réflex… ¿Qué Significan Tantos Números .        Abreviaciones de Objetivos de las Cámaras Réflex Más Populares.      El Rey de los Objetivos: 50mm f / 1.4.      Tus Mejores Fotografías Las Harás Con Uno De Estos Objetivos', 'oibeas', 'https://www.pablopando.com/blog/wp-content/uploads/2018/08/Helios-44-M-4.jpg', '05/07/2020', 'objetivos'),
      new Post('Consejos', 'Si estás leyendo un blog de fotografía es porque de algún modo te atrae de este mundillo. Puede que simplemente te guste viajar y tener recuerdos fotográficos de tus viajes y te paseas por aquí para conocer algún consejo, o que no quieras perderte ni una carita de tu adorable bebé, por ejemplo, y que tu pasión no vaya más allá. Aunque permíteme que lo dude, no estarías leyendo este artículo precisamente. Si estás aquí es porque tu interés va más allá. Te gusta la fotografía. Mucho.    La cuestión ahora es si te gusta solo para algunos de tus ratos libres o te apasiona tanto como para dedicar buena parte de tu vida a ella. Si te gustaría que algún día te llamaran fotógrafo o fotógrafa, vivir de este arte o, aunque tengas otro modo de ganarte la vida, que la fotografía fuera tu compañera de vida, tu otro yo, con lo que te identificas, te expresas y por lo que te conocen.', 'oibeas', 'https://img.static-kl.com/images/media/3481758C-BC6A-4535-93EF6A424E530F79', '19/07/2020', 'consejos'),
      new Post('Modelos', 'Tendrás que desarrollar tus habilidades comunicativas. Por un lado, para expresar tus ideas a través de tus imágenes. Necesitas poder contar lo que sientes a través de la fotografía, eso es comunicación. Si no comunicas, tus imágenes estarán vacías y no tendrán interés para nadie.      Por otro lado, tu capacidad de comunicación te servirá para involucrar a otras personas en tus proyectos, como protagonistas de las imágenes, como ayudantes, como colaboradores o lo que precises. Además también la necesitarás para promocionarte y lograr que tu trabajo sea visto por el público. ', 'oibeas', 'https://img3.woman.es/e8/09/47/charlize-theron-640.jpg', '25/07/2020', 'modelos'),
      new Post('Accesorios', 'Cuando hablo de recursos no me refiero a los del equipo o a los que encuentras por la web, sino a los propios recursos, a que seas una persona resolutiva, que si te has olvidado un difusor en casa, seas capaz de solventarlo; si la meteorología te falla, puedas darle la vuelta a la tortilla y sacar lo mejor del día; o si el monumento que ibas a fotografiar está cerrado al público seas capaz de encontrar cómo llevarte un pedacito a casa.', 'oibeas', 'https://bachimport.files.wordpress.com/2019/06/fomex.jpg', '04/08/2020', 'accesorios'),
      new Post('Retratos', 'No puede existir un artista sin creatividad ni imaginación. Estas dos cualidades van de la mano de la palabra artista. La creatividad es lo que te impulsa a crear constantemente, con una cámara de fotos, una guitarra o un pincel y un bote de pintura. Si no eres una persona creativa o que se esfuerza por serlo, difícilmente podrás llegar a considerarte un artista ni en fotografía ni en ninguna otra disciplina artística.', 'oibeas', 'https://d500.epimg.net/cincodias/imagenes/2019/05/28/lifestyle/1559073183_258744_1559073333_noticia_normal.jpg', '09/08/2020', 'retratos'),
    ]

  }

  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost)
    });
  }


  agregarPost(formValue): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.arrPost.push(formValue);
      console.log(this.arrPost);
      resolve(this.arrPost);
    });
  }

  // agregarPost(pPost) {
  //   console.log(this.arrPost);
  //   return this.arrPost.push(pPost);
  // }


  getPostsByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost.filter(post => {
        return post.categoria === pCategoria;
      }));
    });
  }



  // // Filtro por pais
  // getByPais(pPais): Promise<Escritor[]> {
  //   return new Promise((resolve, reject) => {
  //     resolve(ESCRITORES.filter(escritor => {
  //       return escritor.pais === pPais;
  //     }));
  //   });
  // }

  // add(pEscritor): Promise<Escritor[]> {//Aqui hacemos un push en la base de datos de escritores.db
  //   return new Promise((resolve, reject) => {
  //     pEscritor.id = ESCRITORES.length + 1;
  //     ESCRITORES.push(pEscritor);
  //     resolve(ESCRITORES);
  //   });
  // }

}
