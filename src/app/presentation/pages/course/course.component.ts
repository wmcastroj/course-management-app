import { Component, inject } from '@angular/core';
import { HttpCourseService } from '../../../infrastructure/http-course.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { CourseResponse } from '../../../domain/course.entity';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-course',
  imports: [CardComponent],
  templateUrl: './course.component.html',
})
export class CourseComponent {
  private service = inject(HttpCourseService);

  courses = toSignal(
    this.service.getAll().pipe(
      catchError((err) => {
        console.error(err);
        return of([]);
      })
    ),
    { initialValue: [] as CourseResponse[] }
  );
}
