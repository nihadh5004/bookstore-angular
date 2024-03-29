import { Component,OnInit } from '@angular/core';
import { booksListType } from 'src/app/assets/types/booksListType';
import { BooksService } from 'src/app/services/booksapi/books.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  books!:booksListType

constructor(private booksService:BooksService){}

ngOnInit(): void {
    this.booksService.getBooks().subscribe((res)=>{
      console.log(res)
      this.books=res
      
    }
    )
}
}
