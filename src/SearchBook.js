// import React from 'react'
// // import * as BooksAPI from './BooksAPI'
// import './App.css'
// import { Link } from 'react-router-dom'



// class SearchBook extends Component {
//     handleSubmit = (e) => {
//         e.preventDefault()
//         const values = serializeForm(e.target, { hash: true })
//         if (this.props.onSearchBook)
//         /**Contact (created by Route)
//          */
//         this.props.onSearchBook(values)
//     }
   


// render(){
//     return(
//         <div className="search-books">
//         <div className="search-books-bar">
//           <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
//           <div className="search-books-input-wrapper">
//             {/*
//               NOTES: The search from BooksAPI is limited to a particular set of search terms.
//               You can find these search terms here:
//               https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

//               However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
//               you don't find a specific author or title. Every search is limited by search terms.
//             */}
//             <input type="text" placeholder="Search by title or author"/>

//           </div>
//         </div>
//         <div className="search-books-results">
//           <ol className="books-grid"></ol>
//         </div>
//       </div>
//     )
// }
// }


























// // /**
// //  * Search for a book when navigating to search engine
// //  */

// //  import React, { Component } from 'react'

// //  class SearchBook extends  Component {
// //      render () {
// //          return (
// //              <div>
// //                  Looking for your favorite book, let us know:
// //              </div>
// //          )
// //      }
// //  }




// // export default SearchBook





















// // // // import React, { Component } from 'react';
// // // // import { Link } from 'react-router-dom'
// // // // import ImageInput from './ImageInput'


// // // /*=> YOUTUBE Video =>https://www.youtube.com/watch?v=8JjYl5r3wLk
// // // => commit => https://github.com/udacity/reactnd-books-complete/commit/09d3d6da0fa0e2c40c95c66d99d0a2d31323ae06
// // //  */
// // // //  class SearchBook extends Component {
// // // //   render() {
// // // //     return (
// // // //     //   <div>search book!</div>
// // // //     <div>
// // // //          <div>
// // // //         <Link className='close-search-book' to='/'>Close</Link>
// // // //         <form className='search-book-form'>
// // // //           <ImageInput
// // // //             className='search-book-avatar-input'
// // // //             name='avatarURL'
// // // //             maxHeight={64}
// // // //           />
// // // //           <div className='search-book-details'>
// // // //             <input type='text' name='name' placeholder='Name'/>
// // // //             <input type='text' name='email' placeholder='Email'/>
// // // //             <button>Add book</button>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //     )
// // // //   }
// // // // }
// // // //  export default SearchBook




// // // /**
// // //  * Serialize The Form Data
// // //  * 
// // //  * 
// // // At this point, our form will serialize the values from user input (i.e., the name and email),
// // // adding them as a query string to the URL. We can add some additional functionality by having
// // // our app serialize these form fields on its own. After all, we want the app to ultimately 
// // // handle creating the book and saving it to the state.

// // // To accomplish this, we'll use the form-serialize package (' "form-serialize": "^0.7.2",')to output this information as a 
// // // regular JavaScript object for the app to use.

// // // npm install --save form-serialize
// // // Let's see it all in action!
// // //  */

// // // import React, { Component } from 'react';
// // // import { Link } from 'react-router-dom'

// // //  class SearchBook extends Component {
// // //     handleSubmit = (e) => {
// // //         e.preventDefault()
// // //     }

// // //   render() {
// // //     return (
// // //     <div>
// // //         <Link className='close-search' to='/'>Close</Link>
// // //     </div>
// // //     )
// // //   }
// // // }
// // //  export default SearchBook
// // // // Dynamically Render Pages