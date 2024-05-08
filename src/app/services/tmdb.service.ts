import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from '../models/movie.model';
import { TvShow } from '../models/tv-show.model';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey: string = 'f1708aa94afcafc4c93ff94b4b729531';
  private apiUrl: string = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) { }
  
  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get(`${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`)
      .pipe(
        map((response: any) => response.results as Movie[])
      );
  }
  getTopRatedTvShows(): Observable<TvShow[]> {
    return this.http.get(`${this.apiUrl}/tv/top_rated?api_key=${this.apiKey}`)
      .pipe(
        map((response: any) => response.results as TvShow[])
      );
  }
  search(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/multi?api_key=${this.apiKey}&query=${query}`)
      .pipe(
        map((response: any) => response.results)
      );
  }
}
