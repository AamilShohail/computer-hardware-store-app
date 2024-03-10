import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { UserService } from '@app/services/user.service';
import { SocialUser } from '@abacritt/angularx-social-login';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { FileUploadComponent } from '@app/file-upload/file-upload.component';
import { CommonModule } from '@angular/common';
import { ProductInventoryGridComponent } from '@app/product-inventory-grid/product-inventory-grid.component';

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    SidebarModule,
    ButtonModule,
    AvatarModule,
    ToolbarModule,
    FileUploadComponent,
    CommonModule,
    ProductInventoryGridComponent,
  ],
})
export class HomeComponent implements OnInit {
  sidebarVisible = true;
  loggedInUser!: SocialUser;

  private destroyRef = inject(DestroyRef);

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.userDetails$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((user: SocialUser | undefined) => {
        if (user) {
          this.loggedInUser = user;
          return;
        }
        this.router.navigate(['./']);
      });
  }
}
