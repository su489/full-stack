import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  
  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:5000/books");
    setBooks(res.data);
  };

  
  const addBook = async (book) => {
    const res = await axios.post("http://localhost:5000/books", book);
    setBooks([...books, res.data]);
  };




  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/books/${id}`);
    setBooks(books.filter((book) => book._id !== id));
  };



// Update book
const updateBook = async (id, updatedData) => {
  const res = await axios.put(
    `http://localhost:5000/books/${id}`,
    updatedData
  );

  // UI me update karne ke liye
  setBooks(
    books.map((book) =>
      book._id === id ? res.data : book
    )
  );
};




  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook ,updateBook}}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => useContext(BookContext);
