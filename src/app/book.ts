
/* here we take all the attributes of a Library Management System*/
export class Book {
    id(id: any) {
      throw new Error('Method not implemented.');
    }
    bookId: number = 0;
    bookName: string = "";
    authorName: string = "";
    deptId: number=0;
    deptName: string="";
    edition: number =0;
    noOfCopies: number=0;

}