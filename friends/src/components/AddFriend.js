import React, {useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function AddFriend() {

    const [friend, setFriend] = useState({
        id: new Date(),
        name: "",
        age: "",
        email: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post("/friends", friend)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handleChanges = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" value={friend.name} onChange={handleChanges}/>

            <input type="text" name="age" placeholder="age" value={friend.age} onChange={handleChanges}/>

            <input type="email" name="email" placeholder="email" value={friend.email} onChange={handleChanges}/>

            <button type="submit">Add Friend</button>
        </form>
    )
}