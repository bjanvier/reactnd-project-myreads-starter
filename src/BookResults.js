import React, { Component } from 'react';
import PropTypes from 'prop-types'

const shelfOptions = [ 
  { option :'Currently reading',  value :"currentlyReading" },
  { option :'Want to Read', value :"wantToRead"},
  { option :'Read',  value :"read"},
  { option :'None', value :'none' } //to remove the item when the user has selected
]  


class BookResults extends Component {
  render() {
    const {movingBooks, book } = this.props
    let allShelvesUpdated =[], authorAndTitle = [],
        currentShelf = 'None';
    this.props.books.map( Book => book.id === Book.id ? currentShelf = Book.shelf: currentShelf='None'  )

//object holding the props we'll need to move
// the book around different shelves
    const ourSelectedProps ={
            onChange:e => movingBooks(book, e.target.value),
            defaultValue : currentShelf,
            key: book.id
     }
    /**
     * We are creating the select/option</>'s that 
     * will allow the user to move the book anywhere 
     */
          allShelvesUpdated.push(
          <form className="book-shelf-changer">
                  <label>
                       <select {...ourSelectedProps} >
                            <option key={book.id} value="none" disabled>Move to...</option> {/*placeholder*/}
                           {/* we append the option </> each the book */}
                            {shelfOptions.map( shelf =>  
                            <option key={shelf.value} value={shelf.value}>
                                {shelf.option}
                            </option>
                        )}
                     </select>
                </label>
             </form>
         )
      /**
       * We pushing the author and the book title to the UI
       */
     authorAndTitle.push(
     <div>
        <label>
          <h4 className='book-title'>{!false ? book.title : 'Not title available'} </h4> 
        </label>
        <label>
          <h4 className='book-authors'>{!false ? book.authors : `We cannot find the ${book.authors}'s name`}</h4>
        </label>
    </div>
     )

    return (
        <section className="book">
            <article className="book-top">
                <img className="book-cover" style={{ width: 130, height: 190, }} src={true ? book.imageLinks.thumbnail: `NO RESULT` } alt={false ? `The cover for ${book.title}` : `The cover of ${book.title} is not available` }/>
                {allShelvesUpdated}
            </article>
            <article><br/>
                 {authorAndTitle}
            </article>
        </section>
      )
  }
  static propTypes = {
    movingBooks: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
  }
}
export default BookResults




