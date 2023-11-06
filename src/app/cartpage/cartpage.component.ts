import { Component, OnInit } from '@angular/core';
import { CartService } from '../header/services/cart.service';
import { cartItem } from '../shared/cartItem';
import { Cart } from '../shared/models/cart';
import { FoodService } from '../header/services/food/food.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
cart!: Cart;
constructor(private cartService:CartService  ){
  
  this.setCart()
}
ngOnInit(): void {
    
}
setCart(){
  this.cart=this.cartService.getcart();
}
removeFromCart(cartItme:cartItem){
  this.cartService.removeFromCart(cartItme.food.id);
  this.setCart();
}
changeQuantity(cartItem:cartItem,quantityInstring:string){
  const quantity =parseInt(quantityInstring);
  this.cartService.changeQuantity(cartItem.food.id,quantity);
  this.setCart();

}

}
