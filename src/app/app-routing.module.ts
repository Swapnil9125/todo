import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { AboutComponent } from './MyComponent/about/about.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'About', component: AboutComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ]
})
export class AppRoutingModule { }
