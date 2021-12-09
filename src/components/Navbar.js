import {Link} from "react-router-dom"


function Navbar () {

    return (
        <nav className = "navbar navbar-dark bg-light">
            <div>
                <Link to="/">Home</Link>
                <Link to="/Newroom">New Room</Link>
            </div>
        </nav>
    )
}

export default Navbar