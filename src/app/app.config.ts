import { ApplicationConfig } from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes
                            // Activate Router data as components inputs.
                            , withComponentInputBinding()
                           )
             ]
};
