import {books} from '../db/books'
import {authors} from '../db/authors'
import {reviews} from '../db/reviews'

const resolvers = {
  Query: {
    books() {
      return books
    },
    authors() {
      return authors
    },
    reviews() {
      return reviews
    }
  },
  Book: {
    author: ({author}) => {
      return authors.find((a) => {
        return a.id === author
      })
    },
    reviews: (parent) => {
      return reviews.filter(review => {
        return review.book === parent.id
      })
    }
  },
  Author: {
    books: (parent) => {
      return books.filter(book => {
        return book.author === parent.id
      })
    }
  },
  Review: {
    book (parent) {
      return books.find(book => {
        return book.id === parent.book
      })
    }
  }
}

export default resolvers