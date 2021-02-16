import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public registerUser(
    email: string,
    username: string,
    password: string
  ): Observable<string> {
    console.log('Registering user with values:', email, username, password);
    const randomId = Math.floor(Math.random() * 1000);
    return of(randomId.toString());
  }

  public updateUserProfile(
    userId: string,
    birthday: string,
    gender: string,
    home: string
  ): Observable<void> {
    console.log('Updating user with values:', userId, birthday, gender, home);
    return of();
  }
}
