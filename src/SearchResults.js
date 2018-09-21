import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookResults from './BookResults'
import * as BooksAPI from './BooksAPI'

class SearchBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    movingBooks: PropTypes.func.isRequired
  }

  state = {
    query: '',
    showingBooks: [],
  }

  handleInputChange = (e) => {
    const query = e.target.value.trim()
    this.setState( { query: this.search.value })
  
  
      if (query){
        BooksAPI.search(query)
          .then(showingBooks => {
            if (showingBooks.length){
                this.setState({showingBooks: showingBooks }) 
          } else {
               this.setState({ showingBooks: [] })
            }
         })
      } 
  }
  // clearQuery = () => { this.setState({ query: ''})}

  render() {
        const {books, movingBooks } = this.props, allQueries=[];
        let ourPros; 
   /**
    * If the search engine is empty or doesn't not match any query, 
    * there will be nothing display
    */

    if (this.state.query) {
        allQueries.push(
          <div>
            <div className="search-books-results">
            {this.state.showingBooks.length === 20 &&
            <div className=''>
                   {/* books on the main page */}

                   <span>
                     Now showing {this.state.showingBooks.length} books.
                   </span>
                </div>
            }
            {/* As the user will keep typing on the search bar, once there's no match,
                the following message will display on the page 
              */}
            {!this.state.showingBooks.length &&
                  <h4 className='no-found'>
                    <i>  Sorry, we can't find any match in our database!!! </i>
                  </h4>
              }
                 
                  <div className="books-grid">
                  {this.state.showingBooks.map((book) => (
                  
                    ourPros ={movingBooks:movingBooks, book:book, books: this.state.showingBooks.filter( Book => Book.id !== book.id) },
                     <div>
                         <BookResults {...ourPros}/> 
                     </div>
                  ))}
                </div>
          </div>
        </div>
        )
      } 
      return (
        <div  className="search-books">
          <div className="search-books-bar">           
            <Link  className="notifications" title={`You've already selected ${books.length} books` } to='/'>
               <span className='books'>Books</span>   
               <span className='size'>{books.length}</span>   
            </Link>
            <Link title='homepage' className="close-search"  to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input className='find-a-query' type="text" ref={input=> this.search=input} value={this.state.query}  placeholder="Search by title or author" onChange={ this.handleInputChange } />
            </div>
          </div>
        <div>{allQueries}</div>
        </div>
      )}
}
export default SearchBook
