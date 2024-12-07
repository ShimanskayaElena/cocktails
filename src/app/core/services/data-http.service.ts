import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiConfig } from '../../config/api.config';


@Injectable({
    providedIn: 'root'
  })
  export class DataHttpService {
  
    constructor(private readonly http: HttpClient) {
    }

    public getAllCocktails(params: HttpParams): Observable<any> {
      return this.http.get<any>(apiConfig.GET_SEARCH_BY_NAME, { params });
    }

    public getDetailsCocktail(params: HttpParams): Observable<any> {
      return this.http.get<any>(apiConfig.GET_DETAILS_COCKTAIL, { params });
    }

    public getRandomCocktail(): Observable<any> {
      return this.http.get<any>(apiConfig.GET_RANDOM_COCKTAIL);
    }
}