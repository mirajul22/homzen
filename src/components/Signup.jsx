import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup({handleClose}) {
  return (
    <div className="popup">
          <div className="absolute right-[35%]  top-[50%]  py-10 p-8 rounded-xl bg-[#f1f1f1] border-2 w-[500px] ">
            <div onClick={handleClose}  className="close-btn absolute right-4 top-2 text-4xl">
              &times;
            </div>
            <h1 className="text-3xl font-bold text-center pb-4">Register</h1>
            <form>
              <div className='pb-2'>
              <label className="text-xl font-semibold  py-2">Your Name or Email Address:</label>
              <input
                className="border-2 w-full py-4 focus:outline-none my-2 rounded-lg px-2 "
                placeholder="example@gmail.com"
                type="text"
                // value={username}
                // onChange={(event) => setUsername(event.target.value)}
              />
              </div>
              <div className='pb-2'>
              <label className="text-xl font-semibold  py-2">Password:</label>
              <input
                className="border-2 w-full py-4 focus:outline-none my-2 rounded-lg px-2 "
                placeholder="Enter Your Password"
                type="password"
                // value={username}
                // onChange={(event) => setUsername(event.target.value)}
              />
              </div>
              <div className='pb-2'>
              <label className="text-xl font-semibold  py-2">Confirm Password:</label>
              <input
                className="border-2 w-full py-4 focus:outline-none my-2 rounded-lg px-2 "
                placeholder="Confirm Password"
                type="password"
                // value={username}
                // onChange={(event) => setUsername(event.target.value)}
              />
              </div>
              <div className='flex gap-2 py-4'>
                <input type="checkbox" />
                <h1>I agree to the Terms of User </h1>
              </div>
              <button
                className="text-xl rounded-lg text-white bg-red-500 w-full font-bold py-2 my-4"
                type="submit"
              >
                Register
              </button>
              <h1 className="text-center my-2">
                Already have an account?
                <Link to="/" className="text-sky-500">
                  Login
                </Link>
              </h1>
            </form>
          </div>
        </div>
  )
}
