import React from 'react'
import { Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBook from './SearchResults'
import './App.css'


class BooksApp extends React.Component {
  state = { books: [] }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  movingBooks = ( book, shelf ) => {
    /**
     * we start updating the book based on the shelf
     * selected (check for documentation in BooksAPI.js)
     */
    BooksAPI.update(book, shelf).then( res =>{
      const {books} = this.state

      if (!res.error){
        book.shelf = shelf
        let newBooks = books.filter( currentBook => currentBook.id !== book.id)

      newBooks.push( book );
         this.setState({  books: newBooks }
         )
      } else {
        console.error('Sorry, Something still needs to be fixed!!')
      }
    }
  )
  }

  render() { 
    const ourProps = {
              books:this.state.books,
              movingBooks: this.movingBooks
       }
    return (
        <div className="app">
           {true? (
          <div>
           <Route exact={true}  path="/" render={() => (
              <div className="list-books">
                <ListBooks {...ourProps}/>
              </div>
           )} />
           {true ? (
                <Route path="/search" render={( { history }) => (
            <SearchBook {...ourProps}
               onLaod={ () => {
              history('/')}
            }
          />
        )} />
           ):
             <p className='no-found'>Something is not right....</p>
           }
        </div>
      ):
        <p className='no-found'>Please wait...</p>}
  </div>
    )
  }
}

export default BooksApp







