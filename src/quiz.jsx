import React from "react";
import Book from "./book"

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.handleBookSelected = this.handleBookSelected.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }

  getInitialState() {
    return _.extend({
      bgColor: 'natural',
      showContinue: false
    }, this.props.data.selectGame());
  }

  handleContinue() {
    this.setState(this.getInitialState());
  }

  handleBookSelected(title) {
    var isCorrect = this.state.isAnswerRight(title);

    this.setState({
      bgColor: isCorrect ? 'pass' : 'fail',
      showContinue: isCorrect
    });
  }

  render() {
    return (<div>
      <div className="row">
        <div className="col-md-4">
          <img src={this.state.author.imageUrl} alt={this.state.author.name} className="authorimage col-md-3"/>
        </div>
        <div className="col-md-7">
          {this.state.books.map((book)=> {
            return <Book onBookSelected={this.handleBookSelected} title={book}/>
          })}
        </div>
        <div className={"col-md-1 answerIndicator "+this.state.bgColor}>
        </div>
      </div>

      {this.state.showContinue ?
        <div className="row">
          <div className="col-md-12">
            <input type="button" className="btn btn-primary btn-block" onClick={this.handleContinue}
                   value="Next author"/>
          </div>
        </div> : <span />

      }

    </div>);
  }
}

Quiz.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default Quiz;