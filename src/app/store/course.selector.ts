import { createFeatureSelector, createSelector } from "@ngrx/store";
import { courseFeatureKey } from "./course.reducer";
import { CourseState } from "./course.state";

export const selectState = createFeatureSelector<CourseState>(courseFeatureKey);

export const selectCourses = createSelector(
    selectState,
    state => state.courses
);

export const selectCourse = (id: number) => createSelector(
    selectCourses,
    courses => courses.find(course => course.id === id)
);