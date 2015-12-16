import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./quiz";

var data = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    books: ['The Adventures of Huckleberry Finn']
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/josephconrad.png',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
];

data.selectGame = function () {
  var books = _.shuffle(this.reduce(function (p, c, i) {
    "use strict";
    return p.concat(c.books);
  }, [])).slice(0, 4);

  var answer = books[_.random(books.length - 1)];

  return {
    books: books,
    author: _.find(this, function (author) {
      "use strict";
      return author.books.some(function (title) {
        return title === answer;
      })
    }),

    isAnswerRight: function (title) {
      "use strict";
      return this.author.books.some(function (t) {
        return t === title;
      })
    }
  }

};

ReactDOM.render(
  <Quiz data={data}/>,
  document.getElementById("app")
);