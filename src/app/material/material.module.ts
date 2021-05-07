import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import{MatFormFieldModule}from '@angular/material/form-field';
import{MatDatepickerModule}from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import{MatInputModule}from '@angular/material/input';
const materialcomponents =[
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  //declarations: [],
  imports: [materialcomponents],
  exports:[materialcomponents]
})
export class MaterialModule { }
