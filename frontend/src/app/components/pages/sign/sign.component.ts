import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  username: string='';
  password: string='';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const isLoggedIn = this.authService.login(this.username, this.password);
    if (isLoggedIn) {
      this.router.navigate(['/adminHome']);
    } else {
      alert('Niepoprawna nazwa użytkownika lub hasło.');
    }
  }
}
