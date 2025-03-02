import { Link } from "react-router-dom";
import { navBarEntery } from "../../Type"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const NavBar= () => {
    const navOptions=navBarEntery.map((entery,index)=>
    <div key={index} className="mr-2"><Link to="products">{entery}</Link></div>)
  return (
    <>
    <div className="w-[100%] bg-black h-[5vh] flex flex-row justify-between items-center no-select">
        <h1 className="text-white ml-2 text-lg">Carry</h1>
        <div>
            <div className="text-white flex flex-row mr-2">
              <div className="mr-2">
              <Link to="/">Home</Link>
              </div>
                {navOptions}
                <Link to="profile" >
                <AccountCircleIcon />
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default NavBar;