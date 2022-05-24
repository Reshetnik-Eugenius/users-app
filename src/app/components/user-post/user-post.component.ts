import { Component, OnInit, Input } from '@angular/core';
import { IUserPost } from 'src/app/shared/model/user-app.model';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  @Input() post!: IUserPost;
  constructor() { }

  ngOnInit(): void {
  }

}
