import Book from '../models/book.js';
export async function getBookDetails(){
    return await Book.find();
}
export async function addBook(input){
    const newBook = new Book( input);
    return await newBook.save();
}
export async function updateBook(input){
    const {id, ...updatedata} = input;
    const job = await Book.findByIdAndUpdate(id,updatedata, {new:true});
    return job;
}
export async function bookByID(id){
    return await Book.findById(id);
}
export async function deleteBookByID(id){
     const deleteBook =  await Book.findByIdAndDelete(id);
     return 'book deleted successfully';
}
