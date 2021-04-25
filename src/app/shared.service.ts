import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from 'src/app/author';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //author: Author;

  constructor(private http: HttpClient) { }


  //getAutList(): Observable<any[]> {
    
    //return this.http.get('assets/user.json').subscribe((data:Author) => this.author=data);
    //return this.http.get<any>("our step");
  //}

  getData(){
    return this.http.get('assets/authors.json');
  }
  
  getDataGenres(){
    return this.http.get('assets/genres.json');
  }
/*
  //getAutList() {
    
  //  return this.http.get('assets/author.json').subscribe(data => this.author=data]);
    //return this.http.get<any>("our step");
  //}


  //addAuthor(val: any) {
    //return this.http.post("our step");
  //}
  //updateAuthor(val: any) {
    //return this.http.put("our step");
  //}
  

  getGenList(): Observable<any[]> {
    return this.http.get<any>("our step");
  }
  //addGenres(val: any) {
    //return this.http.post("our step");
  //}
  //updateGenres(val: any) {
    //return this.http.put("our step");
  //}
  deleteGenres(val: any) {
    return this.http.delete("our step");
  }

  getAllAuthorNames():Observable<any[]>{
    return this.http.get<any[]>("our");
  }
  */
  deleteAuthor(id: number) {
    //TODO: реализовать уделение на в JSON
    return this.http.get('assets/authors.json');//this.http.delete("our step");
  }
}
