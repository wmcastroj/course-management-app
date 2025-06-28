import { Component, inject } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { CourseParams } from '../../../domain/course.entity';
import { HttpCourseService } from '../../../infrastructure/http-course.service';
import { take } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { add } from '../../../store/course.actions';

@Component({
  selector: 'app-add-course',
  imports: [FormComponent],
  templateUrl: './add-course.component.html',
})
export class AddCourseComponent {
  private service = inject(HttpCourseService);
  private store = inject(Store);
  private route = inject(Router);

  handleFilledForm(course: CourseParams) {
    this.service
      .add(course)
      .pipe(take(1))
      .subscribe({
        next: (newCourse) => {
          this.addCourse(newCourse);
          this.route.navigate(['/administracion']);
        },
        error: (err) => {
          console.error(err);
          this.route.navigate(['/administracion']);
        },
      });
  }

  private addCourse(course: CourseParams) {
    this.store.dispatch(add({ course }));
  }
}
