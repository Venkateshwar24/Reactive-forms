import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

const materialcomponents =[
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  //declarations: [],
  imports: [materialcomponents],
  exports:[materialcomponents]
})
export class MaterialModule { }
