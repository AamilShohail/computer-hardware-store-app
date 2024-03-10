import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PrimeNGConfig } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'computer-hardware-store-app';
  constructor(title: Title, private primengConfig: PrimeNGConfig) {
    title.setTitle(this.title);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
