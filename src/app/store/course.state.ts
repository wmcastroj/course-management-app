import { CourseParams } from '../domain/course.entity';

export interface CourseState {
  courses: CourseParams[];
}

export const initialCourseState: CourseState = {
  courses: [],
};
