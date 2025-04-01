import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerDetails } from '../configs/server-details';
import { BookList } from '../interfaces/book-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }

  private apiUrl = ServerDetails.serverIP


  getBooks(): Observable<BookList> {
    return this.http.get<BookList>(this.apiUrl + '/books');
  }


}
