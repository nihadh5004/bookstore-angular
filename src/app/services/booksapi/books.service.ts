import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BooksService {

  constructor(private http:HttpClient) { }


  getBooks():Observable <Record<string,any>>{
    return this.http.get(`volumes?q=SEARCH_QUERY&projection=lite&key=`)
  }

  getBookDetail(id:string):Observable<Record<string,any>>{
    return this.http.get(`volumes/${id}?key=`)
  }


}
