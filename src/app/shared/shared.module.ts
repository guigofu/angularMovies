import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
  ],
  // si no se usa un componente, actua como pasarela (en caso de que el propio shared no tenga componentes)
  exports: [RouterModule],
  declarations: []
})
export class SharedModule { }
