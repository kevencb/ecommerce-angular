import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';

  // Este contenido fue llevado al componente products-list
  // books: Book[] = [
  //   {
  //     id: '1',
  //     cover: './assets/images/El_Padrino.webp',
  //     name: 'El Padrino',
  //     author: 'Mario Puzo',
  //     price: 45000
  //   },

  //   {
  //     id: '2',
  //     cover: './assets/images/Prometeo_Americano.webp',
  //     name: 'Prometeo Americano',
  //     author: 'Kai Bird & Martin J. Sherwin',
  //     price: 70000
  //   }
  // ]

  // onLoaded(img: string){
  //   console.log('Log desde el padre', img)
  // }

}
