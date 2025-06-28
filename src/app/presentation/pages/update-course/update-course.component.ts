import { Component, inject } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { CourseParams } from '../../../domain/course.entity';
import { HttpCourseService } from '../../../infrastructure/http-course.service';
import { take } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { update } from '../../../store/course.actions';

@Component({
  selector: 'update-addcourse',
  imports: [FormComponent],
  templateUrl: './update-course.component.html',
})
export class UpdateCourseComponent {
  private service = inject(HttpCourseService);
  private store = inject(Store);
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  course!: CourseParams;

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getData(id);
  }

  private getData(id: number) {
    this.service
      .getById(id)
      .pipe(take(1))
      .subscribe({
        next: (courseData) => {
          this.course = courseData;
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  handleFilledForm(course: CourseParams) {
    this.service
      .update(course)
      .pipe(take(1))
      .subscribe({
        next: (updatedCourse) => {
          this.updateCourse(updatedCourse);
          this.route.navigate(['/administracion']);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  private updateCourse(course: CourseParams) {
    this.store.dispatch(update({ course }));
  }
}
