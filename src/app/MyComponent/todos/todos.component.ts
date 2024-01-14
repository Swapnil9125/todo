import { Component } from '@angular/core';
import{todo} from "../../todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem;
todos:todo[] ;
  todo: any;
constructor(){
this.localItem = localStorage.getItem("todos");
if(this.localItem == null){
  this.todos = [];
}
else{
  this.todos = JSON.parse(this.localItem);

}
//this.todos = [
  // {
  //   sno: 1,
  //   title: "This is title 1",
  //   desc: "Description 1",
  //   status: true
  // },
  // {
  //   sno: 2,
  //   title: "This is title 2",
  //   desc: "Description 2",
  //   status: true
  // },
  // {
  //   sno: 3,
  //   title: "This is title 3",
  //   desc: "Description 3",
  //   status: true
  // }

//]
}
deleteTodo(todo: todo){
console.log(todo);
const index = this.todos.indexOf(todo);
this.todos.splice(index, 1);
localStorage.setItem("todos", JSON.stringify(this.todos));

}

AddTodo(todo: todo){
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(this.todos));
  
  }

  toggleTodo(todo: todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].status = !this.todos[index].status;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
    }

}
