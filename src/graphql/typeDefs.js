const typeDefs = `
  type Query {
    books: [Book!]!
    authors: [Author!]!
    reviews: [Review!]!
  }

  type Book {
    id: ID!
    title: String!
    author: Author!
    reviews: [Review!]!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  type Review {
    id: ID!
    text: String!
    book: Book!
  }
`;

export default typeDefs