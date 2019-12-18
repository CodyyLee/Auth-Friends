import React, {useState} from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function Login(props) {

    const [login, setLogin] = useState({
        credentials: {
            username: "",
            password: ""
        }
    })

    const handleChanges = (e) => {
        setLogin({
            ...login,
            credentials: {
                ...login.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axiosWithAuth().post("/login", login.credentials)
            .then((res) => {
                localStorage.setItem("token", res.data.payload)
                props.history.push("/view_friends");
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    return (
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='username' id='username' name='username' value={login.credentials.username} onChange={handleChanges}/>

            <input type="password" placeholder="password" id="password" name="password" value={login.credentials.password} onChange={handleChanges}/>

            <button type="submit">Login</button>
        </form>
    )
}