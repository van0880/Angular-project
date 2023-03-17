import { Component, Input } from '@angular/core';
import {OurMission} from '../../models/ourMission'

@Component({
  selector: 'app-our-mision',
  templateUrl: './our-mision.component.html',
  styleUrls: ['./our-mision.component.css']
})
export class OurMisionComponent {
  @Input() block: OurMission [] = []
}
