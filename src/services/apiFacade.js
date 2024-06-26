import {BASE_URL} from "../utils/globalVariables.js"


export const login = async (username, password, callback) => {
    try{
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();
        callback(data);
    }catch(error){
        console.log(error);
    }
}


export const register = async (username, password, callback) => {
    try{
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();
        callback(data);
        console.log(data);
    }catch (error){
        console.log(error);
    }
}

export const fetchProfile = async () => {
    
    const response = await fetch("https://api.github.com/users/nokiknick", {
        method: "GET",
        headers: {
            "Content-Type": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28"
        }
    });

    if(!response.ok){
        throw new Error("Profile not found");
    }
    const data = await response.json();
    return data;
    
}

