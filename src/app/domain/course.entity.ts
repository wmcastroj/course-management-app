export interface CourseParams {
  id?: number;
  name: string;
  description: string;
  duration: string;
  level: string;
  price: number;
}

export interface CourseResponse {
  id: number;
  name: string;
  description: string;
  duration: string;
  level: string;
  price: number;
}
