import { createAction, props } from '@ngrx/store';
import { CourseParams } from '../domain/course.entity';

export const add = createAction(
  '[course] Add Course',
  props<{ course: CourseParams }>()
);

export const update = createAction(
  '[course] Update Course',
  props<{ course: CourseParams }>()
);

export const remove = createAction(
  '[course] Remove Course',
  props<{ id: number }>()
);
