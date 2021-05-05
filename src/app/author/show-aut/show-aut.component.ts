import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/author';
import { SharedService } from 'src/app/shared.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-show-aut',
  templateUrl: './show-aut.component.html',
  styleUrls: ['./show-aut.component.css'],
  providers: [SharedService]
})
export class ShowAutComponent implements OnInit {

  author: any;
  
  authors: Author[] = [];

  ModalTitle!: string;
  VisibleAddEditAut: boolean = false;
  loading: boolean = true;
  closeResult = '';

  constructor(private service: SharedService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.refreshAutList()
  }

  //вызов формы редактирования с передачей в компонент выбраного автора
  editAuthor(id: number){
    this.author= this.authors.find(aut=>aut.id == id);
    this.visibleFormEdit();
  }

  deleteAuthor(id:any) {
    this.service.deleteAuthor(id)
  }

  //получаем список авторов из authors.json
  refreshAutList() {
    this.service.getDataAuthors()
     .subscribe(data => {
      this.authors = data;
    });
  }

  //скрываем форму добавления/реадктирования автора
  hideFormEdit() {
    this.VisibleAddEditAut = false;
    //this.refreshAutList();
  }

  visibleFormEdit() {
    this.VisibleAddEditAut = true;
  }
  
}




