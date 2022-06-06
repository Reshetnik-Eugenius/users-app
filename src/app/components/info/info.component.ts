import { Component, OnInit, Input } from '@angular/core';
import { IUserPost } from 'src/app/shared/model/user-app.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  
  posts: IUserPost[]=[];
  // console.log(posts);
  @Input() info!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
