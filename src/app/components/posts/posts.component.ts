import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postForm !: FormGroup;
  postList : any = [];
  constructor(private fb : FormBuilder, private postsService : PostsService) { }

  ngOnInit(): void {

    this.postForm = this.fb.group({
      userId : ['',Validators.required],
      title : ['',Validators.required],
      body : ['',Validators.required]
    })

    this.getPosts()
  }

  addPost(){

  }

  getPosts(){
      this.postsService.getPosts().subscribe(response=>{
        this.postList = response
      })
  }

}
