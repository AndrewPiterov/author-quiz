import React from "react";

class Book extends React.Component {

  static getPropTypes() {
    return this.propTypes = {
      title: React.PropTypes.string.isRequired
    };
  }

  render() {
    return <div className="answer"><h4>{this.props.title}</h4></div>;
  }
}

export default Book;