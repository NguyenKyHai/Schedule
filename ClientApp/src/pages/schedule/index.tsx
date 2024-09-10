import { useEffect, useState } from "react";
import './index.css';
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import { logout, selectLoginState } from "../auth/authSlice"
import { getData } from "../../api/useFetch";

export interface User {
    userCD: string,
    loginID: string,
    userName1: string
}

export default function Schedule() {
    const state = useAppSelector(selectLoginState);
    const dispatch = useAppDispatch();
    //const token = localStorage.getItem("jwt");  
    const [user, setUser] = useState<User>();
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'jwt': state.token as string
    };

    useEffect(() => {
        getData<User>("User/94", headers)
            .then(response => {
                const data: User = { ...response }
                setUser(data);
            })
    }, [])
    return (
        <>
            <div>
                <p>SCHEDULE {`${JSON.stringify(user)}`}</p>
                <button onClick={() => dispatch(logout())}>Logout</button>
            </div>
        </>
    )
}