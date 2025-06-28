# Course Management App

This project is an Angular-based frontend application developed for academic purposes. The application serves as a course management system for Netec company, allowing them to display available courses to customers and provide administrators with a dashboard to manage course content.

## Project Overview

Netec company needed a frontend solution built with Angular that enables:

- **Public Course Display**: Show available courses to customers
- **Administrative Dashboard**: Allow administrators to edit and manage available courses

The application integrates with an existing Course API that provides the following endpoints:

- `GET ALL` - Retrieve all courses
- `POST` - Create new courses
- `PUT` - Update existing courses
- `DELETE` - Remove courses
- `FIND BY ID` - Get specific course details

## Project Objectives

- Deploy Spring Boot API
- Create Angular application
- Deploy application using Docker
- Validate application functionality

## Technical Stack

- **Frontend**: Angular 20.0.0
- **State Management**: NgRx Store 19.2.1
- **Styling**: Tailwind CSS 4.1.11
- **HTTP Client**: Angular HttpClient
- **Forms**: Angular Reactive Forms
- **Routing**: Angular Router

## Project Structure

```
src/
├── app/
│   ├── domain/           # Domain entities and interfaces
│   │   └── course.entity.ts
│   ├── infrastructure/   # HTTP services and external integrations
│   │   └── http-course.service.ts
│   ├── presentation/     # UI components and pages
│   │   ├── components/
│   │   │   ├── card/
│   │   │   ├── form/
│   │   │   └── table/
│   │   └── pages/
│   │       ├── course/
│   │       ├── dashboard/
│   │       ├── add-course/
│   │       └── update-course/
│   └── store/           # NgRx state management
│       ├── course.actions.ts
│       ├── course.reducer.ts
│       ├── course.selector.ts
│       └── course.state.ts
```

## Features

### Public Features

- **Course Catalog**: Browse available courses with details like name, description, duration, level, and price
- **Course Cards**: Visual representation of courses with relevant information

### Administrative Features

- **Course Management Dashboard**: View all courses in a table format
- **Add New Courses**: Form-based course creation
- **Edit Existing Courses**: Update course information
- **Delete Courses**: Remove courses from the system
- **Form Validation**: Comprehensive validation for course data

### Course Entity

The application manages courses with the following properties:

- ID (auto-generated)
- Name (3-50 characters)
- Description (max 120 characters)
- Duration
- Level (3-20 characters)
- Price (1-99,999,999)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## API Configuration

The application is configured to connect to the Course API at:

```
http://localhost:8084/course
```

Make sure your Spring Boot API is running on this endpoint before starting the Angular application.

## Available Routes

- `/` - Public course catalog
- `/administracion` - Administrative dashboard
- `/agregar` - Add new course form
- `/curso/:id` - Edit existing course form

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Academic Context

This project was developed as part of an academic exercise to demonstrate:

- Angular application development
- Component-based architecture
- State management with NgRx
- HTTP client integration
- Reactive forms implementation
- Responsive design with Tailwind CSS

---

**Note**: This is an academic project created for learning purposes. The Netec company scenario is used for educational context.
