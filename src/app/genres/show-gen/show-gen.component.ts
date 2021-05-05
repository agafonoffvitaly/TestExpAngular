import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/genre';
import { SharedService } from 'src/app/shared.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-gen',
  templateUrl: './show-gen.component.html',
  styleUrls: ['./show-gen.component.css'],
  providers: [SharedService]

})
export class ShowGenComponent implements OnInit {
  
  genre: any;
  visibleForm: boolean = false;
  genres: any = [];
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshGenrList();
  }
  refreshGenrList() {
    this.service.getDataGenres().subscribe(data => {
      this.genres = data;
    });
  }
  editGenr() {

  }
  cancel() {
    //this.name = '';
    this.visibleForm = false;
  }

  save(id: number) {
    this.genre = {id: "0", name:"sdhgdj"};


    if (id == 0) {
      //создаем новый жанр
      this.service.addGenre(this.genre);
      this.visibleForm = false;
    } else {
      this.visibleForm = false;

      //this.myauthors = this.configService.getListAuthors();
    }
  }
  visibleFormEdit() {
    if (this.visibleForm == false) {
      //  this.id = 0;
      this.visibleForm = true;
    }
  }
}
