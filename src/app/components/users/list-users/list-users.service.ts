import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Users } from '../users';

@Injectable()
export class ListUsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(environment.url + environment.users);
  }
}
