import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})



export class BookDetailsComponent implements OnInit {
  id: number = 0;
  book: any = [];
  constructor(private route: ActivatedRoute, private bookService: BookService) { }
  
  /*ngOnInit() is a place to put the code that we need to execute at
   very first as soon as the class is instantiated.*/
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.book = new Book();
    this.bookService.getBookById(this.id).subscribe( data => {
      this.book = data;
    });
  }
  

}