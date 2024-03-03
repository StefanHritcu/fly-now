import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <div>
            <h1>Logo</h1>
            <div>
                <Link to="/shop">Shop</Link>
                <br />
                <Link>About</Link>
                <br />
                <Link>Register</Link>
            </div>
        </div>
        </>
    )
}
export default Header