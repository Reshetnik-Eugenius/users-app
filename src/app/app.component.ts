import { Component, OnInit } from '@angular/core';
import { IUser, IUserPost } from './shared/model/user-app.model';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  users: IUser[]=[];
  userInfo!: IUser;
  posts: IUserPost[]=[];
  
  title = 'users-app';

  constructor(private userService: UserService) {}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe((users: IUser[]) => {
      this.users = users;
      // console.log(users);
    })
  }

  getUserInfo(id: number) {
    this.userService.getUserById(id).subscribe((user: IUser) => {
      this.userInfo = user;
      this.posts = [];
      // console.log(user);
    })
  }

  getPosts(id: number): void {
    this.userService.getPostsByUserId(id).subscribe((posts: IUserPost[]) => {
      this.posts = posts;
      // console.log(posts);
    })
  }
}
