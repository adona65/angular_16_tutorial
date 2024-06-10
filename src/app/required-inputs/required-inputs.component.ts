import { Component } from '@angular/core';
import {HighlightCardComponent} from "../highlight-card/highlight-card.component";
import {RequiredChildComponent} from "./required-child.component";

@Component({
  selector: 'app-required-inputs',
  standalone: true,
  imports: [HighlightCardComponent, RequiredChildComponent],
  templateUrl: './required-inputs.component.html',
  styleUrls: ['./required-inputs.component.css']
})
export class RequiredInputsComponent {

}
