import Client from "./request"
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react"
import { useNotification } from "../hooks/Notification";

function useGetUser() {
    const { auth } = useAuth()
    const [userData, setUserData] = useState()
    const { errorNotification } = useNotification()
    useEffect(() => {
        (async function() {
            if (auth.currentUser) {
                const data = (await Client.get(auth.currentUser, "/user/get")).data
                if (data.error) {
                    errorNotification(data.error)
                } else {
                    setUserData(data)
                }
            }
        })()
    }, [auth.currentUser])
    return userData
}

function useGetClasses() {
    const { auth } = useAuth()
    const [classData, setClassData] = useState()
    const { errorNotification } = useNotification()
    useEffect(() => {
        (async function() {
            if (auth.currentUser) {
                const data = (await Client.get(auth.currentUser, "/class/getall")).data
                if (data.error) {
                    errorNotification(data.error)
                } else {
                    setClassData(data)
                }
            }
        })()
    }, [auth.currentUser])
    return classData
}

export { useGetUser, useGetClasses }