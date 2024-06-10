import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-router-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './router-child.component.html',
  styleUrls: ['./router-child.component.css']
})
export class RouterChildComponent {

  @Input() routeParameter?: string;
  @Input() queryParam?: string;
  @Input() tree?: string;
  @Input() color?: string;
  @Input() resolvedName?: string;
}
