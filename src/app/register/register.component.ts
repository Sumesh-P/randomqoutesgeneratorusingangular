import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   constructor(private route:Router){}
   name:string=''
   email:string=''
   password:any=''
   register(){
     if(this.name && this.email && this.password){
      alert("Register successful")
      sessionStorage.setItem('name',this.name)
      sessionStorage.setItem('email',this.email)
      sessionStorage.setItem('password',this.password)
      this.route.navigateByUrl('/login')
     }
     else{
      alert("Please Fill this form")
     }
   }
}
