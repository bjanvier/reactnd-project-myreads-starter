import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import TheShelves from './TheShelves'


  const shelfOptions = [ 
       { option :'Currently reading',  value :"currentlyReading", bgColor: 'rgb(225, 230, 231)' },
       { option :'Want to Read', value :"wantToRead", bgColor:'rgb(192, 38, 0)'},
       { option :'Read',  value :"read", bgColor: 'rgb(20, 0, 225)'},
      //  { option :'', value :'none' } //To remove the item when the user has selected
   ] 
   
class ListBooks extends Component {
  state = { movingBooks: 0 }
 

  render() {
  const {book} = this.props;
  const updatedShelves = [];
        updatedShelves.push(
          <div>
            {shelfOptions.map( shelf =>  {
                const shelfOption = shelf.option,
                      ourProps = { 
                        movingBooks: this.props.movingBooks,
                        books: this.props.books.filter( book => book.shelf === shelf.value) ,
                      };
                  
            return  (
              <div style={{backgroundColor: shelf.bgColor}}className="bookshelf">
                <h2 className="bookshelf-title">{shelfOption}</h2>
                <div  className="bookshelf-books">
                  <TheShelves {...ourProps}/>
                </div>
              </div> 
              )
          })}
        </div>
      )
    return (
      <div> 
      <div className="list-books-content">
        <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          {shelfOptions.forEach( shelf =>
             <div key={shelf.value}>
                {updatedShelves}
            </div>
          )}
        
      </div>
          <nav className="open-search">
             <Link title='Add new book here...' to="/search">Add a book</Link>
          </nav>
      </div>
    )
  }

  static propTypes = {
    movingBooks: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
  }
}
export default ListBooks
