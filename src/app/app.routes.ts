import { Routes } from '@angular/router';
import { CourseComponent } from './presentation/pages/course/course.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'dashboard', component: DashboardComponent },
];