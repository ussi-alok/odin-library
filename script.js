const myLibrary = [];

function Book(title,author,pages,read) {
  // the constructor...
  this.title =title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        const concatInfo = title+" "+author+" "+pages+" "+read;
        return concatInfo;
    }
}

function addBookToLibrary() {
  // do stuff here
}
