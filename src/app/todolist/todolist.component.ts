import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public todolist : number[];
  public inputData: any;

  constructor() { 
    this.todolist = [];
    
  }

  ngOnInit(): void {
  }

  add (){
    this.todolist.push(this.inputData);
  }

  delete(index:number) {
    this.todolist.splice(index,1);
  }

}
