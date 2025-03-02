import React from "react";
import "../../../App.css";
import GoogleButton from "../../../../public/GoogleButton.svg";
import { Link } from "react-router-dom";
const Signin: React.FC = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col gap-2 justify-center items-center">
        <div className="flex flex-col items-center w-[35vw] border-1 border-round border-gray-400 justify-evenly gap-2 h-[50vh]">
          <h3 className="text-5xl">WeCare</h3>
          <form className="flex flex-col w-[30vw]">
            <input
              type="email/tel"
              placeholder="Mobile Number or Email"
              id="user"
              className="bg-zinc-50 border-1 outline-none border-gray-400 p-2 mb-2 rounded"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="bg-zinc-50 border-1 border-gray-400 outline-none p-2 mb-2 rounded"
            ></input>
            <button
              type="submit"
              className="bg-sky-300 border-1 text-white rounded-md"
            >
              SignIn
            </button>
          </form>
          {/*forgot password*/}
          <div className="flex flex-col justify-center text-center">
            <div className="flex flex-nowrap items-center">
              <div className="w-[13vw]">
                <hr className="text-gray-400" />
              </div>
              <p className="p-2">or</p>
              <div className="w-[13vw]">
                <hr className="text-gray-400" />
              </div>
            </div>
            <p className="cursor-pointer text-sky-600">Forgot password ?</p>
          </div>
        </div>
        {/*Signup section*/}
        <div className="border flex justify-center border-gray-400 p-5 w-[35vw]">
          <p>
            Do not have Account?
            <Link to="/signup">
            <span className="cursor-pointer text-sky-600">SignUp</span>
            </Link>
          </p>
        </div>

        {/*google,apple,microsoftsection*/}
        <div>
          <img
            src={GoogleButton}
            alt="google-signin"
            className="cursor-pointer"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Signin;
