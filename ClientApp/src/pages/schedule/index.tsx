import { useAppSelector } from "../../utils/hooks"
import { selectLoginState } from "../login/loginSlice"


export default function Schedule() {
    //const state = useAppSelector(selectLoginState)
     const token = localStorage.getItem("jwt");   
    return (
        <>
            <div>
                <p>SCHEDULE {`${token}`}</p>
            </div>
        </>
    )
}