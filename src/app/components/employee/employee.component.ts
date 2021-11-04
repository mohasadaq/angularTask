import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  customerForm!: FormGroup;
  constructor(private user : UsersService, private fb : FormBuilder) {}
  
  userList : any = [];
  ngOnInit(): void {
    
    this.getUsers()
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
      // role: ['']
    });

    
  }
  
  addcustomer(): void {
    console.log(this.customerForm);
  }

getUsers(){
  this.user.getUser().subscribe(data=>{
    this.userList= data
    console.log(data);
  })
}

getUserPosts(userId:number){

  alert(userId)
}
  
}
