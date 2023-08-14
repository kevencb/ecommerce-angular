import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private storeService: StoreService
  ){}

  ngOnInit(){
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length
    })
  }

  activeMenu: boolean = false;
  counter: number = 0
  
  toogleMenu(){
    this.activeMenu = !this.activeMenu
  }


}
