import {
  GoogleSigninButtonModule,
  SocialAuthService,
  SocialLoginModule,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { take } from 'rxjs';

@Component({
  selector: 'app-google-sign-in',
  standalone: true,
  imports: [SocialLoginModule, ButtonModule, GoogleSigninButtonModule],
  templateUrl: './google-sign-in.component.html',
  styleUrl: './google-sign-in.component.scss',
})
export class GoogleSignInComponent implements OnInit {
  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.socialAuthService.authState
      .pipe(take(1))
      .subscribe((user: SocialUser) => {
        if (user) {
          this.router.navigate(['home']);
        }
      });
  }
}
