// src/app/models/todo.model.ts
// Shape of a todo item used across the app.
export interface Todo {
    id: string;       // Unique identifier
    title: string;    // Short description entered by the user
    completed: boolean; // Completion status
    createdAt: Date;  // Creation timestamp
}