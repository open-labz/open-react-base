import React from 'react';
import { useState } from 'react';
import { StarRating } from './StarRating';
import { BookFilter } from './BookFilter';

// Sample book data
const initialBooks = [
  {
    id: 1,
    title: 'React Up and Running',
    author: 'Stoyan Stefanov',
    description: 'Learning React.js by building real-world applications',
    coverUrl: 'https://picsum.photos/320/200',
    rating: 4.5,
    tags: ['beginner', 'practical'],
  },
  {
    id: 2,
    title: 'Learning React',
    author: 'Alex Banks & Eve Porcello',
    description: 'Functional web development with React and Redux',
    coverUrl: 'https://dummyimage.com/320x200/000/fff&text=Book+One',
    rating: 4.2,
    tags: ['functional', 'redux'],
  },
  {
    id: 3,
    title: 'React Design Patterns',
    author: 'Carlos Santana Roldán',
    description:
      'Harness the power of React with design patterns and techniques',
    coverUrl: 'https://placehold.co/320x200',
    rating: 4.0,
    tags: ['advanced', 'patterns'],
  },
];

// Book card component
const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
        <StarRating rating={book.rating} />
        <p className="mt-2 text-sm text-gray-700">{book.description}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main component
export default function ReactBooks() {
  const [books, setBooks] = useState(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  const handleFilterChange = (searchTerm) => {
    if (!searchTerm) {
      setFilteredBooks(books);
      return;
    }

    const term = searchTerm.toLowerCase();
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term),
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">React Books</h1>
          <p className="text-blue-100">
            A curated collection of React resources
          </p>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <BookFilter onFilterChange={handleFilterChange} />

        {filteredBooks.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">
              No books found matching your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-gray-300 p-4 mt-auto">
        <div className="container mx-auto text-center text-sm">
          <p>Built with React - No create-react-app, No Redux</p>
          <p className="mt-1">© {new Date().getFullYear()} React Books</p>
        </div>
      </footer>
    </div>
  );
}
