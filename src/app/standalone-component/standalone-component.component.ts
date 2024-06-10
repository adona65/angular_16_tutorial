import { Component } from '@angular/core';
import {HighlightCardComponent} from "../highlight-card/highlight-card.component";

@Component({
  selector: 'app-standalone-component',
  standalone: true,
  imports: [HighlightCardComponent],
  templateUrl: './standalone-component.component.html',
  styleUrls: ['./standalone-component.component.css']
})
export class StandaloneComponentComponent {

}
