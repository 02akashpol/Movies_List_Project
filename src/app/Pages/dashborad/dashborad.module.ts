import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboradRoutingModule } from './dashborad-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    DashboradRoutingModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
})
export class DashboradModule {}
