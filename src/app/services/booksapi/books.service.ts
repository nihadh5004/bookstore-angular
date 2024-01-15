import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bookDetailType } from 'src/app/assets/types/bookDetailType';
import { booksListType } from 'src/app/assets/types/booksListType';

@Injectable()
export class BooksService {

  constructor(private http:HttpClient) { }


  getBooks():Observable <booksListType>{
    return this.http.get<booksListType>(`volumes?q=SEARCH_QUERY&projection=lite&key=`)
  }

  getBookDetail(id:string):Observable<bookDetailType>{
    return this.http.get<bookDetailType>(`volumes/${id}?key=`)
  }


}
