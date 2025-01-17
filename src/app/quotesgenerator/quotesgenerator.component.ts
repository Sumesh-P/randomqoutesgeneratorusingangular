import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-quotesgenerator',
  standalone: true,
  imports: [],
  templateUrl: './quotesgenerator.component.html',
  styleUrl: './quotesgenerator.component.css'
})
export class QuotesgeneratorComponent implements OnInit{
  constructor(private api:ApiService){}
  quote:any={}
  result:any={}
  ngOnInit():void{
    this.getDetails()
  }
  getDetails(){
    this.api.getQuotesAPI().subscribe((res:any)=>{
      console.log(res);
      this.quote=res
      console.log(this.quote);
    })
  }
  generate(){
    this.result=this.quote
    console.log(this.result)
  }
}
