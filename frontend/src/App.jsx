
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./component/ProtectedRoute";
import { BookProvider } from "./context/BookContext";

function App() {
  return (
    <BrowserRouter>
      <BookProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BookProvider>
    </BrowserRouter>
  );
}

export default App;
