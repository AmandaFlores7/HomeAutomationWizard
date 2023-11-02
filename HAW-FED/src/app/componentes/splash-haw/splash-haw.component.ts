import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-haw',
  templateUrl: './splash-haw.component.html',
  styleUrls: ['./splash-haw.component.scss']
})
export class SplashHawComponent {
  
  constructor(private router: Router){}

  ngOnInit() {
    // Espera durante 2 segundos (ajusta el tiempo según tus necesidades)
    setTimeout(() => {
      this.router.navigate(['login']); // Redirige a la página principal
    }, 2000);
  }
}
