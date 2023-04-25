import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(public loginService:AuthenticationService ,
    private router: Router ) { }
  ngOnInit() {


}
yourFeedback(){
  var status= confirm("Thank you for your feedback!..");
   if (status==true) {
    this.router.navigate(['logout']);
     
   }
   else{
    this.router.navigate(['feedback']);
   }

  }
}


