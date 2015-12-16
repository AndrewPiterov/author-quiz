import React from "react";

class Book extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onBookSelected(this.props.title);
  }

  render() {
    return <div onClick={this.handleClick} className="answer"><h4>{this.props.title}</h4></div>;
  }
}

Book.propTypes={
  title: React.PropTypes.string.isRequired
};

export default Book;