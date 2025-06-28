import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CourseParams, CourseResponse } from '../domain/course.entity';
import { catchError, Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpCourseService {
  private readonly TIMEOUT = 3000;
  private readonly baseUrl = '/api/course';
  private httpClient: HttpClient = inject(HttpClient);

  getAll(): Observable<CourseResponse[]> {
    return this.httpClient.get<CourseResponse[]>(this.baseUrl).pipe(
      timeout(this.TIMEOUT),
      catchError((err) => {
        console.error(err);
        throw new Error();
      })
    );
  }

  getById(id: number): Observable<CourseResponse> {
    return this.httpClient.get<CourseResponse>(`${this.baseUrl}/${id}`).pipe(
      timeout(this.TIMEOUT),
      catchError((err) => {
        console.error(err);
        throw new Error();
      })
    );
  }

  add(course: CourseParams): Observable<CourseResponse> {
    return this.httpClient.post<CourseResponse>(this.baseUrl, course).pipe(
      timeout(this.TIMEOUT),
      catchError((err) => {
        console.error(err);
        throw new Error();
      })
    );
  }

  update(course: CourseParams): Observable<CourseResponse> {
    return this.httpClient.put<CourseResponse>(this.baseUrl, course).pipe(
      timeout(this.TIMEOUT),
      catchError((err) => {
        console.error(err);
        throw new Error();
      })
    );
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(
      timeout(this.TIMEOUT),
      catchError((err) => {
        console.error(err);
        throw new Error();
      })
    );
  }
}
