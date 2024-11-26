import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ManagerListComponent } from './app/manager-list/manager-list.component';

bootstrapApplication(ManagerListComponent, appConfig)
  .catch((err) => console.error(err));
