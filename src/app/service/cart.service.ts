import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product:any){
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    // console.log(this.cartItemList);
    
  }

// total price 
  getTotalPrice(){
    let total=0;
    this.cartItemList.map((item : any) => total+= item.total)
  }

  // remove cart item
  removeCartItem(product:any){
    this.cartItemList.filter((item:any)=> item.id===product.id).
    array.map((item:any , i:any)=> {
      this.cartItemList.splice(i,1)
    });
  }

  // remove all
  removeAllcartItem(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
