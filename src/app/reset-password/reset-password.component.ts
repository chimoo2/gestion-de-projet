import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  //selector: 'app-reset-password',
  selector: 'app-resert-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  username: string = '';
  newPassword: string = '';
  message: string = '';
  

  constructor(private http: HttpClient) {}

  onSubmit() {
    const body = new FormData();
    body.append('username', this.username);
    body.append('newPassword', this.newPassword);

    this.http
      .post('http://localhost:8080/api/auth/reset-password', body, { responseType: 'text' })
      .subscribe(
        (response) => {
          this.message = response;
        },
        (error) => {
          this.message = 'Erreur : ' + error.error;
        }
      );
  }
}
  
