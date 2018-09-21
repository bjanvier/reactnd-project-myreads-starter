import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookResults from './BookResults'

class TheShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    movingBooks: PropTypes.func.isRequired
  }

  render() {
    const { books, movingBooks } = this.props
    let ourBooks = {}

    return (
      <section className="books-grid">
        {books.map((book) => (
          ourBooks ={ book:book,
                      books: this.props.books.filter( Book => Book !== book.id),
                      movingBooks: movingBooks,
                      key: book.id    
                    },
          <BookResults {...ourBooks}/>
        ))}
      </section>   
    )
  }
}

export default TheShelves


