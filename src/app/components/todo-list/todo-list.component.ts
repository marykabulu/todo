// src/app/components/todo-list/todo-list.component.ts
// Displays the list of todos. Subscribes to the observable from TodoService
// using the async pipe and delegates user interactions to the service.
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this import
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  standalone: true,
  imports: [CommonModule] // Add CommonModule to imports
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // Connect the template to the observable stream of todos
    this.todos$ = this.todoService.getTodos();
  }

  toggleTodo(id: string): void {
    // Toggle completion state for a todo
    this.todoService.toggleTodo(id);
  }

  deleteTodo(id: string): void {
    // Remove a todo by id
    this.todoService.deleteTodo(id);
  }
}