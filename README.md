# Todo App

A simple and elegant todo application built with Angular 17. Manage your tasks with ease - add, complete, and delete todos with persistent local storage.

## Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Persistent storage (localStorage)
- ✅ Responsive design
- ✅ Clean, modern UI

## Tech Stack

- **Angular 17** - Frontend framework
- **TypeScript** - Programming language
- **SCSS** - Styling
- **Local Storage** - Data persistence

## Project Structure

```
src/app/
├── components/
│   ├── todo-form/     # Add new todos
│   └── todo-list/     # Display and manage todos
├── models/
│   └── todo.model.ts  # Todo interface
└── services/
    ├── todo.service.ts     # Todo business logic
    └── storage.service.ts  # Local storage operations
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run watch` - Build in watch mode

## Usage

1. **Add a todo**: Type your task in the input field and press Enter or click "Add"
2. **Complete a todo**: Click the checkbox to mark as complete
3. **Delete a todo**: Click the delete button to remove a task

All todos are automatically saved to your browser's local storage.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request
