import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:3000"

  constructor(private http: HttpClient) { }

  getDataAuthors(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/authorlist');
  }
  
  //Добавление автора
  addAuthor(val: any) {
    return this.http.post(this.APIUrl+'/authorlist', val).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
  //Редактирование автора
  updateAuthor(val: any) {
    console.log(val);
    return this.http.patch(this.APIUrl+'/authorlist/'+val.id, val).subscribe(
      data => {
        console.log('PATCH Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      });
  }
  //Удаление автора
  deleteAuthor(val: any) {
    return this.http.delete(this.APIUrl+'/authorlist/'+val).subscribe(
      data => {
        console.log('DELETE Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      });
  }

  getDataBooksFilter(val:[]): Observable<any[]>{
    let params = '';
    val.forEach(element => {
      if(params == '')
        params = params+'id='+element
      else
        params = params+'&id='+element
    });
    console.log(this.APIUrl+'/bookslist?'+params);
    return this.http.get<any>(this.APIUrl+'/bookslist?'+params);
  }
  
  getDataGenres(){
    return this.http.get<any>(this.APIUrl+'/genreslist');
  }

   addGenre(val: any) {
    return this.http.post(this.APIUrl+'/genreslist', val);
  }
  updateGenre(val: any) {
    return this.http.put(this.APIUrl+'/genreslist', val);
  }
  deleteGenre(val: any) {
    return this.http.delete(this.APIUrl+'/genreslist', val);
  }

    
}
