import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { Router } from '@angular/router';



@Injectable ({providedIn: 'root'})
export class AuthService {
    
    private apiUrl = 'http://localhost:8080/auth/login';

    constructor( private http: HttpClient, private router: Router){}

    login(username: string, senha: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(this.apiUrl, {username, senha}).pipe(
            tap(response => {
                localStorage.setItem('tokenJWT', response.tokenJWT)
            })
        );
    }

    logout(){
        localStorage.clear();

        this.router.navigate(['/login']).then(() => {
            window.location.reload();
        })
    }

    private getToken(): string | null {
        return localStorage.getItem('tokenJWT');
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }
}

