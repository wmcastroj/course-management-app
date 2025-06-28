import { Component, inject } from '@angular/core';
import { HttpCourseService } from '../../../infrastructure/http-course.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseParams } from '../../../domain/course.entity';
import { take } from 'rxjs';
import { Store } from '@ngrx/store';
import { add } from '../../../store/course.actions';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  private service = inject(HttpCourseService);
  private build = inject(FormBuilder);
  private store = inject(Store);

  form = this.build.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(120),
      ],
    ],
    duration: [
      '',
      [Validators.required, Validators.min(1), Validators.max(120)],
    ],
    level: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    price: [, [Validators.required, Validators.min(0), Validators.max(5000)]],
  });

  get nameIsInvalid() {
    return this.form.controls.name.invalid;
  }

  get descriptionIsInvalid() {
    return this.form.controls.description.invalid;
  }

  get durationIsInvalid() {
    return this.form.controls.duration.invalid;
  }

  get levelIsInvalid() {
    return this.form.controls.level.invalid;
  }

  get priceIsInvalid() {
    return this.form.controls.price.invalid;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const name = this.form.controls.name.value!;
    const description = this.form.controls.description.value!;
    const duration = this.form.controls.duration.value!;
    const level = this.form.controls.level.value!;
    const price = this.form.controls.price.value!;

    const course: CourseParams = {
      name: name,
      description: description,
      duration: duration,
      level: level,
      price: price,
    };

    this.service
      .add(course)
      .pipe(take(1))
      .subscribe({
        next: (newCourse) => {
          this.addCourse(newCourse);
          this.form.reset();
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  private addCourse(course: CourseParams) {
    this.store.dispatch(add({ course }));
  }
}
