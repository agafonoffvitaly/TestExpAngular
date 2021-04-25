import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/author';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-aut',
  templateUrl: './show-aut.component.html',
  styleUrls: ['./show-aut.component.css'],
  providers: [SharedService]
})
export class ShowAutComponent implements OnInit {

  author:any;
  authors: Author[]=[];
  Modaltitle:string = 'fdf';
  visibleForm: boolean = false;

  constructor(private service:SharedService) { }

  ngOnInit(){
    //this.refreshAutList();
    //this.AuthorList = this.service.getAuthortList();

    //получаем список авторов из authors.json
    this.service.getData().subscribe(data => this.authors = data["authorList"]);
  }
  /*visibleFormEdit() {
    if (this.visibleForm == false) {
    //  this.id = 0;
      this.visibleForm = true;
    }
  }
  
  refreshAutList(){
    //this.service.getAutList().subscribe(data=>{
    //  this.AuthorList=data;
    //}
  };
  */
  fillDataAuthorForm(id: number) {
    this.visibleForm = true;
    this.author = this.authors.find(author=>author.id ==id)

  }
  deleteAuthor(id: number) {
    console.log(id);
    this.author = this.service.deleteAuthor(id);
  }
  editClick(author:any){
    this.author=author;
    this.Modaltitle="";
    this.visibleForm=true;
  }
}
