import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) {}

    getTopHeadlines() {

      return this.http.get<RespuestaTopHeadLines>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=47dc07607b494da480e56dd79acf5f96')
      
      
    }

   
}
