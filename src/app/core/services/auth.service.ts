import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { L, T } from '@angular/cdk/keycodes';


@Injectable ({providedIn: 'root'})
export class AuthService {
    
    private apiUrl = 'http://localhost:8080/auth/login';

    constructor( private http: HttpClient){}

    login(username: string, senha: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.apiUrl, {username, senha}).pipe(
            tap(response => {
                localStorage.setItem('token', response.token)
            })
        );
    }

    logout(){
        localStorage.removeItem('token');
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }
}

