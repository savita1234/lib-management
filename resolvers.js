const book = require('./models/book.js');

const resolvers = {
  hello: () => "this is my 1st graphql-url",
   books: async () => await book.find(),
};

module.exports = resolvers;
