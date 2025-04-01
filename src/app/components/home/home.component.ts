import { Component } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { BookList } from '../../interfaces/book-interface';
import { ServerDetails } from '../../configs/server-details';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  books: BookList = [];
  baseUrl: string = ServerDetails.imagePath;

  constructor(private bookservice:BookServiceService){

  }
  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.bookservice.getBooks().subscribe(res=>{
      this.books=res;
      console.log(this.books);
    });
  }


}
