import { Component, OnInit } from '@angular/core';
import { lsTypeCart } from 'src/app/assets/types/lsTypeCart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems: lsTypeCart[]=[]


  ngOnInit(): void {
    const storedCartItems = localStorage.getItem('carts');

    if (storedCartItems) {

      console.log(storedCartItems);
      
      this.cartItems = JSON.parse(storedCartItems);
      console.log(this.cartItems);
      
    }
        
    }

  

}