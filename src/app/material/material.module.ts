import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';


const Materials = [
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatListModule,
  MatCardModule,
  MatMenuModule
]


@NgModule({
  imports: [
    Materials
  ],
  exports: [
    Materials
  ]
})
export class MaterialModule { }
