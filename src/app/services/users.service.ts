import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = environment.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(`${this.apiUrl}/users`);
  }

  public getUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/users/${id}`);
  }

  public updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.apiUrl}/users/${user.id}`, user, this.httpOptions);
  }
}
