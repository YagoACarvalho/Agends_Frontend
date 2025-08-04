import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { TokenInterceptor } from './app/core/interceptors/token.interceptor';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
  ...appConfig,
    providers: [
      ...(appConfig.providers ?? []),
      provideHttpClient(withInterceptorsFromDi()),
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true,
      },
      provideRouter(routes)
    ],
  }
)
  .catch((err) => console.error(err));
