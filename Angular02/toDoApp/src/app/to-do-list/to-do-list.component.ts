import { Component, OnInit } from "@angular/core";
import { ToDo } from "./to-do.model";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {
  nuevaTarea = '';
  listaTareas : ToDo[] = [];
  constructor () {
  }

  completed: boolean = true;

  ngOnInit(): void {

  }

  crearTarea() {

    const añadirTarea: ToDo = {
      name: this.capitalize(this.nuevaTarea),
      completed: false
    }

    this.listaTareas.push(añadirTarea);
    this.nuevaTarea = ''
  }

  onCompleted(i: number) {

    this.listaTareas[i].completed = !this.listaTareas[i].completed
  }

  onDelete(i: number) {
    this.listaTareas.splice(i,1);
  }

  capitalize(str: string) {
    return str ? str[0].toUpperCase() + str.slice(1) : '';
  }
}
