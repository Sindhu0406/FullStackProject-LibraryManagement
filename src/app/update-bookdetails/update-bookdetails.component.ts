import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-bookdetails',
  templateUrl: './update-bookdetails.component.html',
  styleUrls: ['./update-bookdetails.component.css']
})
export class UpdateBookdetailsComponent implements OnInit {
  id: number = 0;
  book: Book = new Book();
  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    }, error => console.log(error));
  }
//when you click sumbit button to call this onsubmit method and go to the service class to recieve the updated data. 
  onSubmit(){
    this.bookService.updateBook(this.id, this.book).subscribe( data =>{
      this.goToBookList();
    }
    , error => console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }

  //In this method  to show popup message to update or not.
  confirmUpdated(){
    var status = confirm("your record updated successfully!");
    if(status==true){
      this.bookService.updateBook(this.id, this.book).subscribe( data =>{
        this.goToBookList();
      }
      , error => console.log(error));
    }
    else{
      this.router.navigate(['/books']);
    }
}
}
