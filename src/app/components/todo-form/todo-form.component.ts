// src/app/components/todo-form/todo-form.component.ts
// Presents the input field and button to add new todos.
// Uses two-way binding for the input and delegates creation to TodoService.
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  standalone: true,
  imports: [FormsModule] // Add FormsModule to imports
})
export class TodoFormComponent {
  newTodoTitle = '';

  constructor(private todoService: TodoService) { }

  addTodo(): void {
    // Ignore empty/whitespace-only entries
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }
}