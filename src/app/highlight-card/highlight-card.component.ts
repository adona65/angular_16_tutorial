import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-highlight-card',
  standalone: true,
  imports: [],
  templateUrl: './highlight-card.component.html',
  styleUrls: ['./highlight-card.component.css']
})
export class HighlightCardComponent {

  @Input()
  title = "Untitled content";
}
