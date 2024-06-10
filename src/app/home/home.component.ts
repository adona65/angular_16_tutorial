import { Component } from '@angular/core';
import {HighlightCardComponent} from "../highlight-card/highlight-card.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HighlightCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
