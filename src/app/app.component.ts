import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // en este espacio, se insertarán los hijos 'directos'
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'app';
}
