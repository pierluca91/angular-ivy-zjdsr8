import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { AnagraficaComponent } from './components/anagrafica/anagrafica.component';
import { AnagraficaService } from './components/anagrafica/anagrafica.service';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';
import { ListUsersService } from './components/users/list-users/list-users.service';
import { MatTableModule } from '@angular/material/table/table-module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule
  ],
  declarations: [AppComponent, HelloComponent, AnagraficaComponent],
  providers: [ListUsersService, AnagraficaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
