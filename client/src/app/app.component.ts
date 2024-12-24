import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <h1>welcome to {{ title }}</h1>
    <ul>
      @for (user of users; track user.id) {
        <li>
          {{ user.userName }}
        </li>
      }
    </ul>
  `,

  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'client';
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
  }
}
