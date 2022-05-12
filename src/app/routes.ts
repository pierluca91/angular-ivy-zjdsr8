import { Routes } from '@angular/router';
import { AnagraficaComponent } from './components/anagrafica/anagrafica.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lista-utenti' },
  { path: 'lista-utenti', component: ListUsersComponent },
];
