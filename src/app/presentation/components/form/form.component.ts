import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseParams } from '../../../domain/course.entity';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input() course?: CourseParams;
  @Output() filled = new EventEmitter<CourseParams>();

  private build = inject(FormBuilder);

  form = this.build.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
    description: ['', [Validators.required, Validators.maxLength(120)]],
    duration: ['', [Validators.required]],
    level: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    price: [
      '',
      [Validators.required, Validators.min(1), Validators.max(99999999)],
    ],
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['course'] && changes['course'].currentValue) {
      this.getData();
    }
  }

  private getData() {
    this.form.patchValue({
      name: this.course!.name,
      description: this.course!.description,
      duration: this.course!.duration,
      level: this.course!.level,
      price: String(this.course!.price),
    });
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
      price: +price,
    };

    this.filled.emit(course);
    this.form.reset();
  }
}
