import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private userService : UsersService) { }

  userId : number = 0

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.url[1].path)

    this.userService.getUserPosts(this.userId).subscribe(response=>{
       console.log(response);
       
    })
  }

 



}
