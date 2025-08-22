// src/app/services/todo.service.ts
// Central service managing the list of todos and persistence.
// Exposes an observable stream for components and provides methods
// to add, toggle, and delete todos. Data is persisted to Local Storage
// via the StorageService.
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private STORAGE_KEY = 'todos';
  private todosSubject: BehaviorSubject<Todo[]>;
  public todos$: Observable<Todo[]>;

  constructor(private storageService: StorageService) {
    // Initialize the in-memory store from Local Storage (if present)
    const storedTodos = this.storageService.getData<Todo[]>(this.STORAGE_KEY) || [];
    this.todosSubject = new BehaviorSubject<Todo[]>(storedTodos);
    this.todos$ = this.todosSubject.asObservable();
  }

  // Get all todos
  getTodos(): Observable<Todo[]> {
    return this.todos$;
  }

  // Add a new todo
  addTodo(title: string): void {
    if (!title.trim()) return;

    const newTodo: Todo = {
      id: this.generateId(),
      title: title.trim(),
      completed: false,
      createdAt: new Date()
    };

    // Merge new todo with current list and persist
    const currentTodos = this.todosSubject.getValue();
    const updatedTodos = [...currentTodos, newTodo];
    
    this.todosSubject.next(updatedTodos);
    this.saveTodos(updatedTodos);
  }

  // Toggle todo completion status
  toggleTodo(id: string): void {
    // Flip the completed flag for the matching todo
    const currentTodos = this.todosSubject.getValue();
    const updatedTodos = currentTodos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.todosSubject.next(updatedTodos);
    this.saveTodos(updatedTodos);
  }

  // Delete a todo
  deleteTodo(id: string): void {
    // Remove the todo with the given id
    const currentTodos = this.todosSubject.getValue();
    const updatedTodos = currentTodos.filter(todo => todo.id !== id);

    this.todosSubject.next(updatedTodos);
    this.saveTodos(updatedTodos);
  }

  // Helper method to save todos to storage
  private saveTodos(todos: Todo[]): void {
    // Persist the entire list to Local Storage
    this.storageService.saveData(this.STORAGE_KEY, todos);
  }

  // Helper method to generate a unique ID
  private generateId(): string {
    // Create a compact unique id using timestamp and random segment
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  
}