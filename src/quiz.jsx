import React from "react";
import Book from "./book"

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.data.selectGame();
  }

  render() {
    return (<div>
      <div className="row">
        <div className="col-md-4">
          <img src={this.state.author.imageUrl} alt={this.state.author.name} className="authorimage col-md-3"/>
        </div>
        <div className="col-md-7">
          {this.state.books.map((book)=> {
            return <Book title={book}/>
          })}
        </div>
        <div className="col-md-1">

        </div>
      </div>
    </div>);
  }
}

Quiz.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default Quiz;