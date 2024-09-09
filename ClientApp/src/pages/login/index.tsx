import { useForm, SubmitHandler } from "react-hook-form"
import './index.css';
import { postData } from "../../api/useFetch";
import { LoginRequestModel, LoginResponseModel } from "./loginModel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { useAppDispatch } from "../../utils/hooks";
import { login, LoginState } from "./loginSlice";

export default function Login() {
    const [token, setToken] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginRequestModel>()

    const onSubmit: SubmitHandler<LoginRequestModel> = (data) => {
        setLoading(true);
        postData<LoginRequestModel, LoginResponseModel>("login", data)
            .then((response) => {
                setToken(response.token);
                const data: LoginState = {
                    token: response.token
                }
                dispatch(login(data))
                console.log(response.token)
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        if (token !== "" && typeof token !== "undefined") {
            navigate('/schedule', { replace: true });
        } else if (typeof token === "undefined") {
            setError("Please check your login ID or password!")
        }
    }, [token])

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group"><span>{error}</span></div>
                    <div className="form-group">
                        <label id="lable-userid">Login ID</label>
                        <input {...register("loginId", { required: true })} id="login-id" className="login login-id" />
                        {errors.loginId && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label id="lable-password">Login Password</label>
                        <input {...register("password", { required: true })} id="login-password" className="login login-password" type="password" />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <button className="submit" >LOGIN</button>
                    </div>
                    {loading && <Spinner />}
                </form>
            </div>
        </>
    )
}