import { useContext } from "react";
import { isAuth } from "../AuthContext";
import "./style.css";

function Navbar() {
   
    const {status, handleChange } = useContext(isAuth);

    return (
        <div>
            <button onClick={handleChange} className="button">{status}</button>
        </div>
    );
}

export default Navbar;