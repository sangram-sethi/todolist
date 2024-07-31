# Todo List Application

This is a simple Todo List application built with React. The application allows users to add, edit, and manage tasks with a search functionality.

## Features

- **Add New Tasks:** Users can add tasks with a title and description.
- **Edit Tasks:** Edit existing tasks directly from the list.
- **Mark as Done:** Mark tasks as completed or undo completion.
- **Search Functionality:** Filter tasks by title.
- **Expandable List:** View task details in an expandable format.
- **Dummy Data Storage:** Utilizes a JSON file for data storage.

## System Design

The application follows a component-based architecture:

- `App.js`: Main component managing state and rendering child components.
- `TaskForm.js`: Handles the creation of new tasks.
- `TaskList.js`: Renders the list of tasks.
- `TaskItem.js`: Represents individual tasks with editing capabilities.
- `SearchBar.js`: Provides a search input for filtering tasks.

## Implementation

- State management is handled using React's `useState` and `useEffect` hooks.
- Task data is fetched from a local `data.json` file.
- Task operations (add, edit, mark complete) are performed in-memory.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd todo-list-app

2. Install dependencies:

   ```bash
   npm install

3. Run the application:

   ```bash
   npm start
