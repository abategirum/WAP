const books = [];
let idCounter = 1;

module.exports = class Book{

    constructor(id, title, ISBN, publishedDate, author){
        this.id = idCounter++;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;

    }

    save(){
        this.id = idCounter++;
        books.push(this);
        return this;
    }

    static getAll(){
        return books;
    }

    static getBookById(id){
        const result = books.find(books => books.id == id)
        if(result){
            return result;
        }else{
            throw new Error('no such book exists');
        }
    }

    delete(){
        const index = books.findIndex(books => books.id == this.id);
        if(index > -1){
            books.splice(index,-1);
        }else{
            throw new Error('no such books exists in our database');
        }
    }

    update(){
        const index = books.findIndex(books => books.id == this.id);
        if(index > -1){
            products[index] = this;
        }else{
            throw new Error('no such books exists in our database');
        }
    }

    
}