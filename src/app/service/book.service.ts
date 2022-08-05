import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  base_Url=" http://localhost:3000/jsonbooks";
  constructor(private http:HttpClient) { }

  httpOptions={
    headers:new HttpHeaders({
      'content-type':'application/json'
    })
  }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('an error occurred:', error.error.message);}
  else{
    console.error('backend retured code ${error.status}',+'body was:${error.error}');
  }
      return throwError('Something bad happened try again later');
    };

  createItem(item:any):Observable<Book>{
     return this.http.post<Book>(this.base_Url,JSON.stringify(item),this.httpOptions)
    .pipe(retry(2),catchError(this.handleError))
  }


  getList():Observable<Book>{
    return this.http.get<Book>(this.base_Url).pipe(retry(2),catchError(this.handleError))
  }
  getItem(id:string):Observable<Book>{
    return this.http.get<Book>(this.base_Url+'/'+id).pipe(retry(2),catchError(this.handleError))
  }//update item
    updateItem(id:string, item: any): Observable<Book>{
      return this.http.put<Book>(this.base_Url+'/'+id, JSON.stringify(item), this.httpOptions).pipe(retry(2),catchError(this.handleError))
//deleteitemS
    }
    deleteItem(id:string){
      return this.http.delete<Book>(this.base_Url+'/'+id, this.httpOptions).pipe(retry(2),catchError(this.handleError))
    }
  }


