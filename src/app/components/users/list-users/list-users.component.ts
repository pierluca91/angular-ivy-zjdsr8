import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table/table-data-source';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Users } from '../users';
import { ListUsersService } from './list-users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  utenti$ = new Subject();
  lista;
  constructor(private listUserService: ListUsersService) {
    this.listUserService
      .getAllUsers()
      .pipe(tap((e) => console.log(e)))
      .subscribe((el) => this.utenti$.next(el['data']));
  }
  columnNames = [
    {
      id: 'position',
      value: 'No.',
    },
    {
      id: 'name',
      value: 'Name',
    },
    {
      id: 'weight',
      value: 'Weight',
    },
    {
      id: 'symbol',
      value: 'Symbol',
    },
  ];
  ngOnInit() {
    this.utenti$.subscribe((el) => {
      this.lista.push(el);
      new MatTableDataSource(this.lista);
    });
  }
}
