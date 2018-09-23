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
    queriesFound: [],
  }

  handleInputChange = (e) => {
    const query = e.target.value.trim()
    this.setState( { query: this.search.value })

  if(query) {
      BooksAPI.search(query)
          .then((showingBooks) => {
               if(showingBooks.length) {
               this.setState(
                {queriesFound: showingBooks }
           )
       } else {
        this.setState({ queriesFound: []})
       }
      })
    }
  }
  // clearQuery = () => { this.setState({ query: ''})}

  render() {
       const  { books, movingBooks } = this.props;
         let allQueries=[];
         let ourPros; 

if ( this.state.query) {
    allQueries.push(
     <div>
         <div className="search-books-results">
            {this.state.queriesFound.length &&
               <div>
                   {/* books on the main page */}
                   <span className='query-found'>
                     Now showing {this.state.queriesFound.length} books.
                   </span>
                </div>
            }
             {/* As the user will keep typing on the search bar, once there's no match,
                the following message will display on the page 
              */}
             {!this.state.queriesFound.length &&
                  <h4 className='no-found'>
                    <i>  Sorry, we can't find any match in our database!!! </i>
                  </h4>
              }
                 
                  <div className="books-grid">
                  {this.state.queriesFound.map((book) => (
                  
                    ourPros ={movingBooks:movingBooks, book:book, books: books },
                     <div>
                         <BookResults {...ourPros}/> 
                     </div>
                  ))}
                </div>
          </div>
          <div className="search-books-bar">
              <Link role='link' title="homepage" className="close-search"  to="/">Close</Link>
          <div className="search-books-input-wrapper">
    </div>
  </div>
</div>
   )
} 

     return (
      <div className='search-book'>
        <div className="search-books-bar">           
            <Link role='link' className="notifications" title={`You've already selected ${books.length} books` } to='/'>
               <span className='books'>Books</span>   
               <span className='size'>{books.length}</span>   
            </Link>
            <Link title='homepage' className="close-search"  to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input tabIndex='-1' className='find-a-query' type="text" ref={input=> this.search=input} value={this.state.query}  placeholder="Search by title or author" onChange={ this.handleInputChange } />
            </div>
          </div>
        <div>{allQueries}</div>
      </div>  
      )
    }
}
export default SearchBook
