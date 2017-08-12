import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //Gets called after the component loads
  componentDidMount() {
    //gets all the books 
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      console.log(books);
    });
  }

updateBook = (val1, val2) =>{
console.log('Hit');
}

  render() {
    const {books} = this.state;
    return (
      <div className="app">
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter((book) => {
                        return book.shelf === 'currentlyReading';
                      }).map((book) => (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{
                                width: 128, height: 193,
                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                              }}></div>
                              <div className="book-shelf-changer">
                                <select value={book.shelf} onChange={(event) => this.updateBook(book, event.target.value)}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            {book.authors.map((author) => (
                              <div key={author} className="book-authors">{author}</div>
                            ))}
                          </div>
                        </li>
                      ))}


                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter((book) => {
                        return book.shelf === 'wantToRead';
                      }).map((book) => (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{
                                width: 128, height: 193,
                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                              }}></div>
                              <div className="book-shelf-changer">
                                <select value={book.shelf}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            {book.authors.map((author) => (
                              <div key={author} className="book-authors">{author}</div>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter((book) => {
                        return book.shelf === 'read';
                      }).map((book) => (
                        <li key={book.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{
                                width: 128, height: 193,
                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                              }}></div>
                              <div className="book-shelf-changer">
                                <select value={book.shelf}>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            {book.authors.map((author) => (
                              <div key={author} className="book-authors">{author}</div>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              {/* onClick={() => this.setState({ showSearchPage: true })} */}
              {/* <Link to="/search">Add a book</Link> */}
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
