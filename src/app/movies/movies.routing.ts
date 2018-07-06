import { Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

export const moviesRoutes: Routes = [
    {
        path: 'peliculas', component: MoviesComponent, children: [
            { path: '', component: MovieListComponent },
            { path: ':id', component: MovieDetailComponent }
        ]
    }

];
