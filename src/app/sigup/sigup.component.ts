import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent {
  loginservice: any;
  constructor(private bookService: BookService,
    private router: Router) { } 
    
    username = '';
    email='';
    password = '';
    confirm_password ='';
    
    /*ngOnInit() is a place to put the code that we need to execute at very first as soon as 
    the class is instantiated.*/

      ngOnInit() {
    
    }

    //this method call when we click sigup button to check username and password crt or not
      confirmRegister(){

        if(this.username === '' || this.email === '' || this.password === ''|| this.confirm_password===''){
          var status = confirm("It is mandatory to fill all the fields");
        }
        else{
        var status = confirm("Registered Successfully");
        
        if(status==true){
          this.router.navigate(['login']);
        }
      }
        }
        
       /* confirmSignup(){
          var status= confirm("Successfully registered..");
           if (status==true) {
            this.router.navigate(['login']);
             
           }
           else{
            this.router.navigate(['sigup']);
           }
           
          }*/
    
    }    
    

