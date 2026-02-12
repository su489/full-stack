import BookForm from "../component/BookForm";
import BookList from "../component/BookList";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      
      <h1 className="text-3xl font-bold mb-6">
        📚 Book Manager Dashboard
      </h1>

      <BookForm />
      <BookList />

    </div>
  );
};

export default Dashboard;
