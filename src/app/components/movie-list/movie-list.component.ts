import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  topRatedMovies!: Movie[];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.tmdbService.getTopRatedMovies().subscribe(movies => {
      this.topRatedMovies = movies;
    })
  }

}
