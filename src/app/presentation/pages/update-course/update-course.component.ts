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
  private idCourse: number = 0;

  course!: CourseParams;

  ngOnInit(): void {
    this.idCourse = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getData(this.idCourse);
  }

  private getData(id: number) {
    this.service
      .getById(id)
      .pipe(take(1))
      .subscribe({
        next: (courseData: CourseParams) => {
          this.course = courseData;
        },
        error: (err: Error) => {
          console.error(err);
        },
      });
  }

  handleFilledForm(course: CourseParams) {
    course = { ...course, id: this.idCourse };
    this.service
      .update(course)
      .pipe(take(1))
      .subscribe({
        next: (updatedCourse: CourseParams) => {
          this.updateCourse(updatedCourse);
          this.route.navigate(['/administracion']);
        },
        error: (err) => {
          console.error(err);
          this.route.navigate(['/administracion']);
        },
      });
  }

  private updateCourse(course: CourseParams) {
    this.store.dispatch(update({ course }));
  }
}
