import { useContext } from "react";
import { isAuth } from "../AuthContext";
import "./style.css";

function Status() {
    const { status, token } = useContext(isAuth);

    return (
        <div>
            <h2>User status is :- {status}</h2>
             <h2>Token number is :- {token}</h2>
        </div>
    );
}

export default Status;