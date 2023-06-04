import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// const Login = ({ handleLogin, authenticated }) => {
//   return (
//     <din>
//       <h1>Hello 1111 </h1>
//       <button onClick={() => handleLogin()}>LOGIN</button>
//     </din>
//   );
// };

// export default Login;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle login logic here
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-8 rounded shadow"
      >
        <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
        <h2 className="text-2xl mb-4 text-center font-semibold">CHAT APP</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <span className="text-lg mr-4">
          Don’t have an account? Register <a href="/register">here</a>
        </span>
      </form>
    </div>
  );
};
export default Login;
