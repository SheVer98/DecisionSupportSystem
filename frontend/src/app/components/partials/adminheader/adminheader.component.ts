import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent {

  constructor(private authService: AuthService, private router: Router) {

  }

  wyloguj(): void{
    const isLoggedIn =this.authService.logout();
    if (!isLoggedIn)
      this.router.navigate(['/']);
      else {
        alert('Blad wylogowania');
      }
  }


}
