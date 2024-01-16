import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Book from './Book';
import { books } from './books';

function BookList() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
