import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngForDemo';

  items = [
    'This is the first item',
    'This is an even item',
    'This is an odd item',
    'This is an even item',
    'This is an odd item',
    'This is an even item',
    'This is an odd item',
    'This is an even item',
    'This is an odd item',
    'This is the last item',
  ]
}
