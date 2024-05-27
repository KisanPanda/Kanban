import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="header">
            <h2 className="font-bold text-2xl text-white ml-3">Kanban Board</h2>
            </div>
            <div className="mr-10 ">
           <Link to={"/login"}> <button className="bg-red-600 py-2 px-2 rounded-md text-white ml-10 text-lg font-semibold hover:opacity:80 duraction-200;">Login</button></Link>
            <Link to={"/register"}><button className="bg-red-600 py-2 px-2 rounded-md text-white text-lg font-semibold hover:opacity:80 duraction-200; ml-9">Sign Up</button></Link>
            </div>
           
        </div>
    )
}
export default Navbar;