import React, {useEffect, useState} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function ViewFriends() {

    const [friends, setFriends] = useState({
        friends: []
    })

    useEffect(() => {
        axiosWithAuth().get("/friends")
            .then(res => {
                console.log(res.data)
                setFriends({
                    friends: res.data
                })
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            {friends.friends.map((friend) => {
                return (
                    <div>
                        <p>Name:{friend.name}</p>
                        <p>Age:{friend.age}</p>
                        <p>Email:{friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}