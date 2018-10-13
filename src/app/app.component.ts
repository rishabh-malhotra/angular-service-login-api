import { Component } from '@angular/core';
import { LoginService} from './login.service';
import { NgForm } from '@angular/forms';

//import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
//import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login-testing';
  public selected : Object;
  //some: Object;
  public myData: Object ;
  constructor(private getData: LoginService){
    //this.selected={};
    //this.some ={};
    }
    loginUser(form: NgForm){
     // this.myData= form.value;
      //console.log(form.value.username);
     // this.getData.getUserData(form.value);
     //this.getData.authUser(this.myData).subscribe((res)=>{this.some = res});
     //this.getData.authUser(this.myData).subscribe((user)=>this.some = JSON.parse(user));
     //console.log(this.some);.pipe(map((response: any) => response.json()))
     
     //this.getData.authUser(form.value).subscribe(status=>console.log(JSON.stringify(status)));
     this.getData.authUser(form.value).subscribe((status:Object)=>
        {this.displayData(status)});
    }
    displayData(data){
      this.selected=data;
    }
  ngOnInit(){
    
  }
}
