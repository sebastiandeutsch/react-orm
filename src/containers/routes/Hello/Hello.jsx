import React from 'react'
import { Router, Route, Link } from 'react-router'

import FlatButton from 'components/FlatButton'
import * as Actions from 'actions/Actions'

import Styles from './Hello.sass'

import BookRepository from 'models/BookRepository'
import Book from 'models/Book'

import PublisherRepository from 'models/PublisherRepository'
import Publisher from 'models/Publisher';

const publisherRepository = new PublisherRepository()
const publisher = new Publisher({ name: "O’Reilly" })
publisherRepository.create(publisher);

const bookRepository = new BookRepository()
const book1 = new Book({ name: "Das Buch", isbn: "1", publisher: publisher })
const book2 = new Book({ name: "C++ for Noobs", isbn: "2", publisher: publisher })
bookRepository.create(book1)
bookRepository.create(book2)

console.log(bookRepository.all());

export default class Hello extends React.Component {
  handleAddClick(event) {
    const r = Math.floor(Math.random() * 100)
    const newBook = new Book({ name: "Buch " + r, isbn: r })
    bookRepository.create(newBook)
  }

  handleChangeClick(event) {
    book2.attributes.name = "foo " + Math.floor(Math.random() * 100)
    book2.save()
  }

  handleChange() {
    console.log("repository changed")
    this.forceUpdate()
  }

  render() {
    bookRepository.subscribe(this.handleChange.bind(this))

    return (
      <div className={Styles.Header}>
        <h2>
          Hello World!
        </h2>

        <br />

        <div onClick={this.handleAddClick}>Add Book</div>
        <div onClick={this.handleChangeClick}>Change Book</div>

        <br />

        <ul>
          {bookRepository.all().map((book, key) => {
            return <li key={key}>{book.name}</li>
          })}
        </ul>
      </div>
    )
  }
}
