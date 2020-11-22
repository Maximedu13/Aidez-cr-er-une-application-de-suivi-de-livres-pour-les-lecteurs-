class Book{
    constructor(title, author, description, pages, currentPage, read){
      this.title = title;
      this.author = author;
      this.description = description;
      this.pages = pages;
      this.currentPage = currentPage;
      this.read = read;
    }
  
    readBook(page){
      console.log(this.currentPage);
      if(page < 1 || page > this.pages){
        return 0
      } else if(page >= 1 && page < this.pages){
        this.currentPage = page
        return 1;
      } else if(page === this.pages){
        this.currentPage = page;
        this.read = true;
        return 1;
      }
    }
  }
