import { createReducer, on } from '@ngrx/store';
import { initialCourseState } from './course.state';
import { add, remove, update } from './course.actions';

export const courseFeatureKey = 'course';

export const reducer = createReducer(
  initialCourseState,

  on(add, (state, { course }) => {
    return {
      ...state,
      courses: [...state.courses, course],
    };
  }),

  on(update, (state, { course }) => {
    const updatedCourses = state.courses.map((c) =>
      c.id === course.id ? { ...c, ...course } : c
    );
    return {
      ...state,
      courses: updatedCourses,
    };
  }),

  on(remove, (state, { id }) => {
    const filteredCourses = state.courses.filter((c) => c.id !== id);
    return {
      ...state,
      courses: filteredCourses,
    };
  })
);
