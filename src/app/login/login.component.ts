import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route:Router){}
     email:string=''
     password:any=''
     login(){
      const a=sessionStorage.getItem('email')
      const b=sessionStorage.getItem('password')
       if(this.email==a && this.password==b){
        alert("Login successful")
        this.route.navigateByUrl('/quotes')
       }
       else if(!this.email || !this.password){
        alert("Please Fill this form")
       }
       else{
        alert("Invalid Email or password")
       }
      }
}
