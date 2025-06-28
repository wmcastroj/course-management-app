import { Component, inject, signal } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { HttpCourseService } from '../../../infrastructure/http-course.service';
import { CourseParams } from '../../../domain/course.entity';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { remove } from '../../../store/course.actions';

@Component({
  selector: 'app-dashboard',
  imports: [TableComponent, RouterLink],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  private service = inject(HttpCourseService);
  private router = inject(Router);
  private store = inject(Store);

  courses = signal<CourseParams[]>([]);

  ngOnInit() {
    this.getAllCourses();
  }

  private getAllCourses() {
    this.service.getAll().subscribe({
      next: (values) => {
        this.courses.set(values);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  handleUpdate(id: number) {
    this.router.navigate(['/curso', id]);
  }

  handleRemove(id: number) {
    this.service.delete(id).subscribe({
      next: () => {
        this.deleteCourse(id);
        this.getAllCourses();
      },
      error: (err) => console.error(err),
    });
  }

  private deleteCourse(id: number) {
    this.store.dispatch(remove({ id }));
  }
}
