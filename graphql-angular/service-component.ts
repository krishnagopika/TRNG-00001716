import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USER } from './graphql.operations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any;
  error:any;
  constructor(private apollo:Apollo){}
  
  ngOnInit(): void {
    this.apollo.watchQuery({
      query:GET_USER,variables:{
        id:1
      }
    }).valueChanges.subscribe(({data,error}:any)=>{
      this.user=data.users[0];
      console.log(data)
      this.error=error;
    }
    )

    this.apollo.query({
      query:GET_USER,variables:{
        id:2

      }
    }).subscribe( (data)=>{

      
      console.log(data)
    })
   
  }
  title = 'revhire';
}
