import { Component, OnInit } from '@angular/core';
import { Book } from '../book'
import { BookService } from '../book.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bookrecords',
  templateUrl: './create-bookrecords.component.html',
  styleUrls: ['./create-bookrecords.component.css']
})
export class CreateBookrecordsComponent implements OnInit {
  book: Book = new Book();
  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
  }
//This method save all the book details
  saveBook(){
    this.bookService.createBook(this.book).subscribe( data =>{
      console.log(data);
      this.goToBookList();
    },
    error => console.log(error));
  }
//this method go to your books navigate path.
  goToBookList(){
    this.router.navigate(['/books']);
  }
//this method call when we click create book submit button to save and create book.
  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }
  //this method will show you popup message to your book inserted or not.
  confirmInserted(){
    var status = confirm("Record inserted successfully!");
    if(status==true){
      console.log(this.book);
    
    }
    else{
      this.router.navigate(['books']);
    }
  }
}

