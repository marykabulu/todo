// src/app/components/todo-list/todo-list.component.ts
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
    this.todos$ = this.todoService.getTodos();
  }

  toggleTodo(id: string): void {
    this.todoService.toggleTodo(id);
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id);
  }
}