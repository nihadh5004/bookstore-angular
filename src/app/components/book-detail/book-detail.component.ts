import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bookDetailType } from 'src/app/assets/types/bookDetailType';
import { lsTypeCart } from 'src/app/assets/types/lsTypeCart';
import { BooksService } from 'src/app/services/booksapi/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  bookDetail!:bookDetailType

  quantity:number = 1

  constructor(private route: ActivatedRoute, private bookDetailService:BooksService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Access the 'id' parameter
      const bookId = params['id'];
      if (bookId) {
        console.log('Book ID:', bookId);
        this.bookDetailService.getBookDetail(bookId).subscribe((res)=>{
          console.log(res)
          this.bookDetail=res
        })
      } else {
        console.log('No Book ID provided');
      }
    });
  }


  addToCart() {
    const storedCartData = localStorage.getItem('carts');
  
    let cart: lsTypeCart[] = [];
  
    if (storedCartData) {
      cart = JSON.parse(storedCartData);
  
      const existingProductIndex = cart.findIndex(item => item.name === this.bookDetail.volumeInfo?.title);
  
      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += this.quantity;
      } else {
        const newProduct: lsTypeCart = {
          name: this.bookDetail.volumeInfo?.title,
          price: this.bookDetail.saleInfo?.listPrice?.amount,
          quantity: this.quantity,
          imageLink: this.bookDetail.volumeInfo?.imageLinks?.thumbnail
        };
  
        cart.push(newProduct);
      }
    } else {
      const newProduct: lsTypeCart = {
        name: this.bookDetail.volumeInfo?.title,
        price: this.bookDetail.saleInfo?.listPrice?.amount,
        quantity: this.quantity,
        imageLink: this.bookDetail.volumeInfo?.imageLinks?.thumbnail
      };
  
      cart.push(newProduct);
    }
  
    // Save the updated cart array back to local storage
    localStorage.setItem('carts', JSON.stringify(cart));
  
    console.log('Cart updated:', cart);
    alert('item added to cart')
  }
  
}
