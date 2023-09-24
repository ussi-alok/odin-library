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

Book.prototype.toggleRead = function(){
    this.read=!this.read;
}

function toogleRead(index){
    myLibrary[index].toggleRead();
    render();
}

function render(){
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML="";
    for(let i =0; i<myLibrary.length;i++){
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.setAttribute("class","book-card");
        bookEl.innerHTML = `
            <div class="card-header">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">by ${book.author}</h5>
            </div>
            <div class="card-body">
                <p>${book.author}</p>
                <p class="read-status">${book.read ? "Read":"Not Read Yet"}</p>
                <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
                <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle</button> 
            </div>
        `;
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index) {
    myLibrary.splice(index,1);
    render();
}

function addBookToLibrary() {
  // do stuff here
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    render();
}

let newBookbtn = document.querySelector(".newBook");
newBookbtn.addEventListener("click", function(){
    let newBookForm = document.querySelector(".newBookForm");
    newBookForm.style.cssText="display:block;";
})

let newBookForm = document.querySelector(".newBookForm");
newBookForm.addEventListener("submit",function(event){
    event.preventDefault();
    addBookToLibrary();
})