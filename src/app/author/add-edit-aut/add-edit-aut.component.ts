import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-aut',
  templateUrl: './add-edit-aut.component.html',
  styleUrls: ['./add-edit-aut.component.css']
})
export class AddEditAutComponent implements OnInit {

  constructor() { }

  @Input() author:any;
  
  visibleForm: boolean = false;


  ngOnInit(): void {
    
  }

}
