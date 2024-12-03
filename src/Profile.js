import React from "react";
import { useLocation, Link } from "react-router-dom";

function Profile(){
    const location = useLocation();
    const { firstName, lastName, email, favoriteSeason } = location.state || {};

    return(
        <div>
            <h1>Profile Page</h1>
            <p><strong>First Name: {firstName}</strong></p>
            <p><strong>Last Name: {lastName}</strong></p>
            <p><strong>Email: {email}</strong></p>
            <p><strong>Favorite Season: {favoriteSeason}</strong></p>
            <Link to="/dashboard">Go to Dashboard!!</Link>
        </div>
    );
}

export default Profile;