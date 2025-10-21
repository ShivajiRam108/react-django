import React, { useEffect, useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState(0);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json();
      setBooks(data);

      //  console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addBook = async () => {
    const bookData = {
      title,
      release_year: releaseYear,
    };
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      // console.log(data);
      setBooks((prev) => [...prev, data]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTitle = async (pk, releaseYear) => {
    const bookData = {
      title: newTitle,
      release_year: releaseYear,
    };
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      setBooks((prev) =>
        prev.map((book) => {
          if (book.id === pk) {
            return data;
          } else {
            return book;
          }
        })
      );
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBook = async (pk) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`, {
        method: "DELETE",
      });
      // await response.json();
      setBooks((prev) => prev.filter((book) => book.id !== pk))
      
      // console.log(data);
    } catch (err) {
      console.log(err);
    }

  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          📚 Book Library
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Book</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              required
              placeholder="Book Title..."
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <input
              type="number"
              required
              placeholder="Release Year.."
              onChange={(e) => setReleaseYear(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button 
              onClick={addBook}
              className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Add Book
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800">
                    <span className="text-gray-600">Title:</span> {book.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Release Year:</span> {book.release_year}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                  <input
                    type="text"
                    required
                    placeholder="New Title.."
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                  <div className="flex gap-2">
                    <button 
                      onClick={() => updateTitle(book.id, book.release_year)}
                      className="flex-1 sm:flex-none px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      Update
                    </button>
                    <button 
                      onClick={() => deleteBook(book.id)}
                      className="flex-1 sm:flex-none px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {books.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No books yet. Add your first book above!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;