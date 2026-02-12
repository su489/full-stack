import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      form
    );

    alert(res.data.message);
    navigate("/login");

  } catch (error) {
    console.log("FULL ERROR:", error.response);
    alert(error.response?.data?.message);
  }
};


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Signup</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3"
          onChange={(e) => setForm({...form, email: e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          onChange={(e) => setForm({...form, password: e.target.value})}
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Register
        </button>
        <p className='text-center mt-4 cursor-pointer' 
        onClick={() => navigate('/login')}> Already have an account ?<span className='text-[#ff4d2d]'>Sign In</span></p>
 
      </form>
    </div>
  );
};

export default Signup;
