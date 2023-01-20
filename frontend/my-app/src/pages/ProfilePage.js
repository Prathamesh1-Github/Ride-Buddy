import React from "react";
import { useState, useEffect } from "react"
import axios from "axios"
import MainNavbar from "../components/MainNavbar"

const ProfilePage = () => {
    const [profileInfo, setProfileInfo] = useState([])
    const [isError, setIsError] = useState('')

    const getProfileInfo = async () => {
        try{
            const res = await axios.get(
                "http://localhost:3000/api/v1/profile",
                {
                    headers:{
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    }
                }
            )
            console.log(res.data)
            setProfileInfo(res.data)
        }
        catch(error){
            setIsError(error)
        }
    }

    console.log(isError)

    useEffect(() => {
        getProfileInfo()
    }, [])

    return (
        <div className="mainPage">
            <MainNavbar/>
            <h1>{profileInfo[0].name}</h1>
            <p>{profileInfo[0].sex}</p>
        </div>
    )
}

export default ProfilePage
