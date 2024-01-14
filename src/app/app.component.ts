import { Component } from '@angular/core';

@Component({
  selector: 'app-root',    //element selector
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Above all are declerations, according to that index file will call the components inside the body.

export class AppComponent {
  title = 'todo_list';
  // constructor(){
  // setTimeout(() => {
  //   this.title = "Changed Title";
  // }, 5000);
  // }
}
