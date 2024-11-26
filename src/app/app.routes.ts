import { Routes } from '@angular/router';
import { ManagerFormComponent } from './manager-form/manager-form.component';

export const routes: Routes = [
    { path: 'create', component: ManagerFormComponent }, // Crear nuevo Manager
    { path: 'edit/:id', component: ManagerFormComponent } // Editar Manager
];
