import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItems:number= 0
  constructor(private cartItem: CartService) { }

  ngOnInit(): void {

    this.cartItem.getProducts().
    subscribe(res=>{
      this.totalItems = res.length;      
    })
  }

}
