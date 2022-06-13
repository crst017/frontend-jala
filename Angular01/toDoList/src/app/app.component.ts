import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'toDoList';
  firstTask = "Say hello"
  onKey(event: Event) {
    console.log("haciendo enter");
  }
  onSubmit(event: Event) {

    console.log("submit");
  }
}
