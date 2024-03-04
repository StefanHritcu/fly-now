import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <div className="flex justify-between items-center p-10">
            <h1 className="text-2xl font-semibold">Logo</h1>
            <div className="flex">
                <Link className="mx-10" to="/shop">Shop</Link>
                <br />
                <Link className="mx-10">About</Link>
                <br />
                <Link className="mx-10">Register</Link>
            </div>
        </div>
        </>
    )
}
export default Header