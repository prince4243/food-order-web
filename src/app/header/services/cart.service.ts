import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { cartItem } from '../../shared/cartItem';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  changeQuantity(id: number, quantity: number) {
    throw new Error('Method not implemented.');
  }
  private cart:Cart= new Cart();
  addToCart(food:Foods) :void{
    let cartItem1:any =this.cart.items.find(item=>item.food.id===food.id);
    if(cartItem1){
      this.changequantity(food.id,cartItem1.quantity +1);
      return;
    }
    this.cart.items.push(new cartItem(food))
  }

  removeFromCart(foodId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.food.id !=foodId)
  }
  changequantity(quantity:number,foodId:number){
    let cartItem1 =this.cart.items.find(item=>item.food.id === foodId);
    if(!cartItem1) return;
    cartItem1.quantity=quantity;
  }
  getcart():Cart{
    return this.cart
  }
}
