import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * Проверка состояния аутентификации пользователя
   */
  public isAuth(): boolean {
    return !!(localStorage.getItem('email') && localStorage.getItem('password'));
  }

  /**
   * Выход из системы
   */
  public logOut() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }

  /**
   * Вход в систему
   * @param email адрес электронной почты пользователя
   * @param password пароль пользователя
   */
  public logIn(email: string, password: string) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }
}
