import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {

    return(
        <nav>
            <Link to="/login">
                Login
            </Link>

            <Link to="/add_friend">
                Add Friend
            </Link>

            <Link to="/view_friends">
                View Friends
            </Link>
        </nav>
    )
}