import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();

    return (
        <div className="flex flex-col justify-center gap-5 items-center text-center p-4 bg-green-700 text-white text-3xl m-4">
            Github Followers : {data.followers}

            <img src={data.avatar_url} alt="github-profile-img" className="w-72"/>
        </div>
    )
}

export default Github


export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/utkarshtiwari12')
    
    return response.json()
}