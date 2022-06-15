import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {
  nuevaTarea = "";
  listaTareas: string[] = [];
  constructor () {

  }

  ngOnInit(): void {

  }

  crearTarea() {
    this.listaTareas.push(this.nuevaTarea);
    this.nuevaTarea = ''
  }
}
