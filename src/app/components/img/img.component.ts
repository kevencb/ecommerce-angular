import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent{

  imgDefault: string = './assets/images/product_default.png'
  
  // @Input() img: string = ''
  // Usando el setInput
  img: string = ''
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg
    // console.log(newImg, 'cambio la imagen')
  }

  @Output() loaded = new EventEmitter<string>();

  imgError(){
    this.img = this.imgDefault
  }

  imgLoaded(){
    this.loaded.emit(this.img);
  }

}
