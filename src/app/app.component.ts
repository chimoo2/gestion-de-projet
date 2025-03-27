import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ResetPasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fin';
}
