import { Component, Input } from '@angular/core';
import {Category} from '../../models/categorysBlock'

@Component({
  selector: 'app-category-block',
  templateUrl: './category-block.component.html',
  styleUrls: ['./category-block.component.css']
})
export class CategoryBlockComponent {
  @Input('element') data: Category[] | undefined;
}
