import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterChildComponent} from "./router-child.component";

@Component({
  selector: 'app-router-data',
  standalone: true,
  imports: [NgOptimizedImage, RouterChildComponent],
  templateUrl: './router-data.component.html',
  styleUrls: ['./router-data.component.css']
})
export class RouterDataComponent {

  static retrieveName(): string {
    return "Andrew";
  }

}
