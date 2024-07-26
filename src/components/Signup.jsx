import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup({handleClose}) {
  return (
    <div className="popup">
          <div className="absolute right-[35%]  top-[50%]  py-10 p-8 rounded-xl bg-[#f1f1f1] border-2 w-[500px] ">
            <div onClick={handleClose}  className="close-btn absolute right-4 top-2 text-4xl">
              &times;
            </div>
            <h1 className="text-3xl font-bold text-center   py-2">Sign Up</h1>
            <form>
              <label className="text-xl font-semibold mx-2 py-2">Your Name:</label>
              <input
                className="border-2 w-[90%] py-4 focus:outline-none ml-6 my-2 rounded-lg px-2 "
                placeholder="username"
                type="text"
                // value={username}
                // onChange={(event) => setUsername(event.target.value)}
              />
              <label className="text-xl font-bold mx-2 py-2">Password:</label>
              <input
                className="border-2 w-[90%] ml-6 focus:outline-none py-4 my-2 rounded-lg px-2 "
                placeholder="password"
                type="password"
                // value={password}
                // onChange={(event) => setPassword(event.target.value)}
              />


              <h1 className="text-sky-500 text-center mb-2">
                Forgot Password ?
              </h1>
              <button
                className="text-xl rounded-lg text-white bg-sky-500 w-[98%] ml-1 font-bold py-2"
                type="submit"
              >
                Sign Up
              </button>
              <h1 className="text-center my-2">
                Don't have an account?
                <Link to="/" className="text-sky-500">
                  Login
                </Link>
              </h1>
            </form>
          </div>
        </div>
  )
}
