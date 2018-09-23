import React from 'react';
import PropTypes from 'prop-types'

const shelfOptions = 
[ 
  { option :'Currently reading',  value :"currentlyReading" },
  { option :'Want to Read', value :"wantToRead"},
  { option :'Read',  value :"read"},
  { option :'None', value :'none' } //to remove the item when the user has selected
]  



// class BookResults extends Component {

const BookResults = (props) => {
//   render() {
    // const { book, books, movingBooks } = this.props
    let allShelvesUpdated =[], authorAndTitle = [];
  
    /**
     * We're allowing the new books to update with 
     * the current value of shelf in main page
     */
let i = 0, currentShelf
do 
   {
      if (!(props.books[i].id === props.book.id))  {
        currentShelf = 'none';
    } else {
         currentShelf = props.books[i].shelf;
        break;
      }
     i++
    
    } while ( i < props.books.length) ;
   

//object holding the props we'll need to move
// the book around different shelves
const ourSelectedProps ={
  onChange:e => props.movingBooks(props.book, e.target.value),
  defaultValue : currentShelf,
  key: props.book.id,
  title :'toggle to move or remove the book'
}


/**
* We are creating the select/option</>'s that 
* will allow the user to move the book anywhere 
*/
allShelvesUpdated.push(
<form className="book-shelf-changer">
        <label>
             <select  {...ourSelectedProps} >
                  <option key={props.book.id} disabled>Move to...</option> {/*placeholder*/}
                 {/* we append the option </> each the book */}
                  {shelfOptions.map( shelf =>  
                  <option key={shelf.value} value={shelf.value ? shelf.value : 'none'}>
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
                            <h4 className='book-title'>{!false ? props.book.title : 'Not title available'} </h4> 
                        </label>
                        <label>
                            <h4 className='book-authors'>{!false ? props.book.authors : `We cannot find the ${props.book.authors}'s name`}</h4>
                        </label>
                    </div>
                )                  
/**
* We are creating the select/option</>'s that 
* will allow the user to move the book anywhere 
*/
// allShelvesUpdated.push(
    return (
        <li>
             <section tabIndex='0' className="book">
                <article className="book-top">
                <img className="book-cover" style={{ width: 130, height: 190, }} src={props.book.imageLinks ? props.book.imageLinks.thumbnail:'' } alt={false ? `The cover for ${props.book.title}` : `The cover of ${props.book.title} is not available` }/>
                    {allShelvesUpdated}
                </article>
                 <article><br/>
                    {authorAndTitle}
                  </article>
            </section>
     </li>
    )

}
BookResults.propTypes = {
    movingBooks: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
  }
export default BookResults
