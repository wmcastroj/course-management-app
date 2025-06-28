import { Routes } from '@angular/router';
import { CourseComponent } from './presentation/pages/course/course.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';
import { AddCourseComponent } from './presentation/pages/add-course/add-course.component';
import { UpdateCourseComponent } from './presentation/pages/update-course/update-course.component';

export const routes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'administracion', component: DashboardComponent },
  { path: 'agregar', component: AddCourseComponent },
  { path: 'curso/:id', component: UpdateCourseComponent },
];
