import React from "react";
import Book from "./book"

class Quiz extends React.Component {

  static getPropTypes() {
    return this.propTypes = {
      books: React.PropTypes.array.isRequired
    };
  }

  render() {
    return <div>
      {this.props.books.map((book)=> {
        return <Book title={book}/>
      })}
    </div>;
  }
}

export default Quiz;