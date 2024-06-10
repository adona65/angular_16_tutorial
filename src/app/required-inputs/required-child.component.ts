import {Component, Input} from '@angular/core';
import {HighlightCardComponent} from "../highlight-card/highlight-card.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-required-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './required-child.component.html',
  styleUrls: ['./required-child.component.css']
})
export class RequiredChildComponent {
  @Input() optionnalInput!: string;
  @Input() secondOptionnalInput!: string;
  /*
   * Here, requiredInput is marked as required field. This means there'll be an error at build time if another component
   * calling RequiredChildComponent doesn't pass a value to requiredInput.
   */
  @Input({required: true}) requiredInput!: string;
}
