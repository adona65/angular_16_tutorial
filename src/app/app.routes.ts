import { Routes } from '@angular/router';
import {RouterDataComponent} from "./router-data/router-data.component";

export const routes: Routes = [
  // Redirect by default to HomeComponent component.
  { path: '', pathMatch: 'full', loadComponent: () =>import('./home/home.component').then(m => m.HomeComponent) },
  //{ path: 'standalone', component: StandaloneComponentComponent },
  { path: 'standalone', loadComponent: () => import('./standalone-component/standalone-component.component').then(m => m.StandaloneComponentComponent) },
  { path: 'required-inputs', loadComponent: () => import('./required-inputs/required-inputs.component').then(m => m.RequiredInputsComponent) },
  { path: 'router-data', loadComponent: () => import('./router-data/router-data.component').then(m => m.RouterDataComponent) },

  /*
   * Router data as components inputs :
   *
   * Thanks to Angular 16, we now may retrieve parameters as input of a component from route (with @Input). Into RouterChildComponent,
   * we'll be able to retrieve as input :
   * - route-parameter which is a route parameter
   * - tree and color as data from data property
   */
  { path: 'router-child/:routeParameter'
    , loadComponent: () => import('./router-data/router-child.component').then(m => m.RouterChildComponent)
    , resolve: { resolvedName: () => RouterDataComponent.retrieveName() }
    ,data: {
      tree: 'Pine',
      color: 'Brown'
    },
  },
  // All other paths redirect to HomeComponent component.
  { path: '**', redirectTo: '' },
];
