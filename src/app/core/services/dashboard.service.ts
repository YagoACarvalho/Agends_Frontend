import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardResponse } from '../models/dashboardResponse';


@Injectable({
    providedIn: 'root'
})

export class DashboardService {
    private urlAPI = 'http://localhost:8080/dashboard';

    constructor(private http: HttpClient){}


    getDashboardData(): Observable<DashboardResponse> {
        return this.http.get<DashboardResponse>(this.urlAPI);
    }
}