import GoogleSU from "../../../../public/GoogleSU.svg"
import { Link } from "react-router-dom"
const SignUp = () => {
  return (
    <>
    <div className="gap-2 w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <div className="border border-gray-400 flex flex-col w-[40vw] items-center justify-around h-[50vh]">
            <h1 className="text-4xl">WeCare</h1>
            <form className="flex flex-col w-[35vw] gap-2">
            <input type='email/tel' placeholder="Mobile Number or Email" className="border border-gray-400 outline-none rounded p-2"></input>
            <input type="password" placeholder="password" className="border outline-none border-gray-400 p-2 rounded"></input>
            <input type="text" placeholder="Name" className="border outline-none border-gray-400 p-2 rounded"></input>
            <input type='text' placeholder="Username" className="border outline-none border-gray-400 p-2 rounded"></input>
            <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy</p>
            <button className="rounded-md p-1 bg-sky-300 cursor-pointer">SignUp</button>
            </form>
        </div>
        <div className="border border-gray-400 p-2 w-[40vw] text-center">
          <p>Have an account?
            <Link to="/signin"><span className="text-blue-400">Login</span></Link></p>
        </div>
        <div>
          <img src={GoogleSU} alt="google-signup"></img>
        </div>
    </div>
    </>
  )
}

export default SignUp