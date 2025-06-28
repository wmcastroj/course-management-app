import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CourseParams } from '../../../domain/course.entity';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() course: CourseParams = {
    id: 0,
    name: '',
    description: '',
    duration: '',
    level: '',
    price: 0,
  };

  getRandomNumber(): number {
    return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  }
}
