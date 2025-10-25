import { getBookDetails, addBook, updateBook,bookByID,deleteBookByID } from './controllers/book.js';

const resolvers = {
  hello: () => "this is my 1st graphql-url",
   books: getBookDetails(),
   createBook: async ({input}) => await addBook(input),
   updateBook: async({input}) => await updateBook(input),
   bookById: async ({id}) => await bookByID(id),
   deleteBook: async({id}) => await deleteBookByID(id),
};

export default resolvers;
