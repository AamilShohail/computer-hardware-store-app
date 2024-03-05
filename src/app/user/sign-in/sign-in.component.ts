import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    GoogleSignInComponent,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  login() {
    throw new Error('Method not implemented.');
  }
  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });
}
