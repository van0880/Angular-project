import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/categorysBlock';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.css']
})
export class HomeCategoriesComponent {
  @Input('element') data: Category[] | undefined;
}
