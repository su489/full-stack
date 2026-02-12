import { useBooks } from "../context/BookContext";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

const BookList = () => {
  const { books, deleteBook, updateBook } = useBooks();

  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title: "", author: "" });

  const handleEditClick = (book) => {
    setEditingId(book._id);
    setForm({ title: book.title, author: book.author });
  };

  const handleUpdate = () => {
    updateBook(editingId, form);
    setEditingId(null);
  };

  return (
    <div className="w-full max-w-md mt-6">
      <h2 className="text-xl font-bold mb-4 text-center">
        Book List
      </h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-500">
          No books available
        </p>
      ) : (
        <ul className="space-y-3">
          {books.map((book) => (
            <li
              key={book._id}
              className="bg-white p-4 rounded-xl shadow-md"
            >
              {editingId === book._id ? (
                <>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="border p-1 mb-2 w-full"
                  />

                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) =>
                      setForm({ ...form, author: e.target.value })
                    }
                    className="border p-1 mb-2 w-full"
                  />

                  <button
                    onClick={handleUpdate}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Save
                  </button>
                </>
              ) : (
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {book.title}
                    </h3>
                    <p className="text-gray-600">
                      {book.author}
                    </p>
                  </div>

                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => handleEditClick(book)}
                      className="text-blue-500"
                    >
                      Edit
                    </button>

                    <MdDeleteForever
                      className="text-red-500 cursor-pointer text-2xl"
                      onClick={() => deleteBook(book._id)}
                    />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
