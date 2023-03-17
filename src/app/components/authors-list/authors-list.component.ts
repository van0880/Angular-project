import { Component, Input } from '@angular/core';
import { Authors,socPages } from 'src/app/models/authorsList';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent {
  @Input('list') author: Authors[] = [];
  @Input('socList') socials: socPages [] = [];
}
