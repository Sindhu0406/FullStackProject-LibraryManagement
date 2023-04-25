import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})

/* Here we are implementing ngonit method for view by id and it moves  to get books details by using id 
ngonit method pass default constructor */

export class BooklistComponent implements OnInit {
books: Book[] = [];
bookName:String="";


  constructor(private bookService: BookService,
    private router: Router) { }

    //This method call when we click search button to search book details by name.
    searchByName(){
      this.bookService.findByName(this.bookName).subscribe(
        data =>{
         this.books=data;
         console.log(data);
        },
        error=>{
          console.log(error);
        });
      }
  
    

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(){
    this.bookService.getBooksList().subscribe(data => {
      this.books = data;

      
    });
  }

  bookDetails(id: number){
    this.router.navigate(['book-details', id]);
  }

  updateBook(id: number){
    this.router.navigate(['update-book', id]);
  }

  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe( data => {
      console.log(data);
      this.getBooks();
    })
  }
  
  confirmDelete(book:Book){
    var status=confirm("Are you want to delete this record?");
    if(status==true){
      this.deleteBook(book.bookId);
    }
    else{
      this.getBooks();
    }
  }
  removeAllBooks(): void{
   var status= confirm("Are You Sure want to remove all the records?  Once you remove you don't retrive your data again!");
    if (status==true) {

    this.bookService.deleteAll().subscribe( data=>{
      console.log(data);
      this.getBooks();
    },
  
    error => {
      console.log(error);
    });
    }
} 

ViewEEE(){
  this.bookService.findByEEE().subscribe(
    data => {
      this.books=data;
      console.log(data);
    },
    error => {
      console.log(error);
    });

}
ViewIT(){
  this.bookService.findByIT().subscribe(
    data => {
      this.books=data;
      console.log(data);
    },
    error => {
      console.log(error);
    });

}
ViewCSE(){
  this.bookService.findByCSE().subscribe(
    data => {
      this.books=data;
      console.log(data);
    },
    error => {
      console.log(error);
    });

}
ViewMech(){
  this.bookService.findByMech().subscribe(
    data => {
      this.books=data;
      console.log(data);
    },
    error => {
      console.log(error);
    });

}





}
  
