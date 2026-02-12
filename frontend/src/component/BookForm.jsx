import { useState } from "react";
import { useBooks } from "../context/BookContext";

const BookForm = () => {
  const [form, setForm] = useState({ title: "", author: "" });
  const { addBook } = useBooks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) return;

    addBook(form);
    setForm({ title: "", author: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
    >
      <h2 className="text-xl font-bold mb-4 text-center">
        Add New Book
      </h2>

      <input
        type="text"
        placeholder="Book Title"
        className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Author"
        className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={form.author}
        onChange={(e) =>
          setForm({ ...form, author: e.target.value })
        }
      />

      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
