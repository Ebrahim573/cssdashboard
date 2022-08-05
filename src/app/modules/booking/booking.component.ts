import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  @ViewChild('bookForm', {static:false})
  bookForm! : NgForm;

  bookData!: Book;
  dataSource =new MatTableDataSource();
  displayedColumns: string[] = ['id','hallname','capacity','personincharge','hallbookingprice','actions'];
  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  isEditMode =false;





  constructor(private BookService: BookService) { }



  ngOnInit(): void {


this.dataSource.paginator=this.paginator;
this.getAllBook()

  }

  getAllBook(){
    this.BookService.getList().subscribe((response: any)=> {
      this.dataSource.data =response;
    });
    }
editItem(element:any){
  this.bookData= _.cloneDeep(element);
  this.isEditMode=true;
}
cancelEdit(){
  this.isEditMode=false;
  this.bookForm.resetForm();
}

deleteItem(id:string){
  this.BookService.deleteItem(id).subscribe((response:any) =>{
   this.dataSource.data=this.dataSource.data.filter((o:any)=>{
  return o.id !==id ? o :false;
  });
  console.log(this.dataSource.data);
  });

 }



  }

