import { Component, OnInit } from '@angular/core';
import {Genre} from 'src/app/genre';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-gen',
  templateUrl: './show-gen.component.html',
  styleUrls: ['./show-gen.component.css']
})
export class ShowGenComponent implements OnInit {
  genres: Genre[]=[];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.service.getDataGenres().subscribe(data => this.genres = data["genresList"]);
  }

}
