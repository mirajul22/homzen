import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Index";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <div>
        <Header/>
      </div> <br/>
      <div className=" mt-[100px] ml-[40%] max-sm:ml-14 rounded-xl bg-transparent border-2 w-[300px] h-[325px]">
        <h1 className="text-3xl font-bold text-center py-2">Login</h1>
        <form onSubmit={handleSubmit}>
          <label className="text-xl font-bold mx-2 py-2">Username:</label>
          <input
            className="border-2 w-[98%] ml-1 my-2 rounded-lg px-2 "
            placeholder="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <label className="text-xl font-bold mx-2 py-2">Password:</label>
          <input
            className="border-2 w-[98%] ml-1 my-2 rounded-lg px-2 "
            placeholder="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <h1 className="text-sky-500 text-center mb-2">Forgot Password ?</h1>
          <button
            className="text-xl rounded-lg text-white bg-sky-500 w-[98%] ml-1 font-bold py-2"
            type="submit"
          >
            Login
          </button>
          <h1 className="text-center my-2">
            Don't have an account?
            <Link to="/sign_up" className="text-sky-500">
              Sign Up
            </Link>
          </h1>
        </form>
      </div>
    </>
  );
}
