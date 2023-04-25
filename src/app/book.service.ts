
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})


/*these methods are converting front end to backend by base url.
In backend there is a cross origin and search for the respective mappings give the data to front end*/

export class BookService {

  private baseURL = "http://localhost:8080/RestAPIproject/books";

  constructor(private httpClient: HttpClient) { }

  getBooksList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }

  createBook(book: Book): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, book);
  }

  getBookById(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
  }

  updateBook(id: number, book: Book): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, book);
  }

  //localhost:4200/delete/5
  deleteBook(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  deleteAll(): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);
  }
  findByName(bookName: any): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}?bookName=${bookName}`);
  }
  findByEEE():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/viewByEEE`);
    }
  findByCSE():Observable<Book[]>{
  return this.httpClient.get<Book[]>(`${this.baseURL}/viewByCSE`);
    }
  findByIT():Observable<Book[]>{
   return this.httpClient.get<Book[]>(`${this.baseURL}/viewByIT`);
     }
   findByMech():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}/viewByMech`);
    }
}