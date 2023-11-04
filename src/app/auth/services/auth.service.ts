import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // almacenamiento user autenticado
  private _authUser$ = new BehaviorSubject<User | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor() {}

  login(): Observable<User> {
    const user: User = {
      id: 5,
      nombre: 'Naruto',
      apellido: 'Uzumaki',
      email: 'fake@mail.com',
    };
    this._authUser$.next(user);
    return of<User>(user);
  }
}
