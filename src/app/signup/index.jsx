import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Index";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "password") {
      alert("signup successful!");
    } else {
      alert("signup error!!!");
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div> <br/>
      <div className=" mt-[100px] max-sm:ml-14 ml-[40%] rounded-xl bg-transparent border-2 w-[300px] h-[400px]">
        <h1 className="text-3xl font-bold text-center py-2">Sign Up</h1>
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
          <label className="text-xl font-bold mx-2 py-2">
            {" "}
            Create Password:
          </label>
          <input
            className="border-2 w-[98%] ml-1 my-2 rounded-lg px-2 "
            placeholder="create password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <label className="text-xl font-bold mx-2 py-2">
            Confirm Password:
          </label>
          <input
            className="border-2 w-[98%] ml-1 my-2 rounded-lg px-2 "
            placeholder="confirm password"
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
            Sign Up
          </button>
          <h1 className="text-center my-2">
            Already have an account?
            <Link to="/login" className="text-sky-500">
              Login
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
