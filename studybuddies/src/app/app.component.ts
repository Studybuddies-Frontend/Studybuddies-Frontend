import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'studybuddies';
  private role: string = '';
  isLoggedIn = false;
  showAdminBoard = false;
  showStudentBoard = false;
  showTutorBoard = false;
  username?: string;
  userId: number;

  constructor(private tokenStorageService: TokenStorageService, private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.isLoggedIn)
    console.log(this.tokenStorageService.getUser())
    this.userId = this.getId();
    console.log("asdasd")
    console.log(this.userId)
    if(this.tokenStorageService.getUser()) {
      this.isLoggedIn = true
    }
    console.log(this.isLoggedIn)
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;

      this.showAdminBoard = this.role == 'admin';
      this.showStudentBoard = this.role == 'alumno';
      this.showTutorBoard = this.role == 'tutor';

      this.username = user.username;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.tokenStorageService.signOut();
    this.router.navigate(["/"]);
  }

  public getId(): number {
    const user = window.sessionStorage.getItem('auth-user');
    console.log(user)
    if (user) {
      let jsonUser = JSON.parse(user);
      return jsonUser.id;
    }

    return 0;
  }

}
