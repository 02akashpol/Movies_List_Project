import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface MovieList {
  description: string;
  genres: string;
  title: string;
  uuid: string;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['uuid', 'title', 'genres', 'description'];
  dataSource: MatTableDataSource<MovieList> | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  moviesList: MovieList[] = [];
  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {
    this.dashboardService.getMoviesList().subscribe((res) => {
      console.log('res :: ', res.results);
      this.moviesList = res.results;
      this.dataSource = new MatTableDataSource(res.results);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
