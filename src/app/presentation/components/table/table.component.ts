import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseParams } from '../../../domain/course.entity';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CurrencyPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() courses: CourseParams[] = [
    {
      id: 0,
      name: '',
      description: '',
      duration: '',
      level: '',
      price: 0,
    },
  ];

  @Output() updated = new EventEmitter<{ id: number }>();
  @Output() removed = new EventEmitter<{ id: number }>();

  onUpdate(id: number) {
    this.updated.emit({ id });
  }

  onRemove(id: number) {
    this.removed.emit({ id });
  }
}
