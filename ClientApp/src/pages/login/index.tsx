import { useForm, SubmitHandler } from "react-hook-form"
import './index.css';
import { postData } from "../../api/useFetch";
import { LoginRequestModel, LoginResponseModel } from "./loginModel";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { login, LoginState, logout, selectLoginState } from "../auth/authSlice";
import { ResponseModel } from "../../utils/responseModel";
import { isTokenExpired } from "../../utils/tokenUtil";
import { useApiPostMutation } from "../../api/commonApi";

export default function Login() {
    //const [token, setToken] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const state = useAppSelector(selectLoginState);
    const [apiPost, result] = useApiPostMutation();
    const {
        register,
        handleSubmit,
        resetField,
        getValues,
        formState: { errors },
    } = useForm<LoginRequestModel>()

    const onSubmit: SubmitHandler<LoginRequestModel> = (data) => {
        setLoading(true);
        // postData<LoginRequestModel, ResponseModel>("login", data)
        //     .then((response) => {
        //         if (!response.hasError) {
        //             const data: LoginState = { ...response?.data as LoginState }
        //             dispatch(login(data))
        //         } else {
        //             resetField('password');
        //             setError(response.error.errors[0].messages[0])
        //         }
        //         console.log(response);
        //     })
        //     .finally(() => setLoading(false))

        apiPost({ url: "login", body: data })
    }

    useEffect(() => {
        if (state.token !== null && !isTokenExpired(state.token)) {
            navigate('/schedule', { replace: true });
        }
    }, [state.token])

    useEffect(() => {
        if (result.isUninitialized) {
            return;
        }
        //isSuccess
        if (result.isSuccess) {
            if (result.data.hasError) {
                resetField('password');
                setError(result.data.error.errors[0].messages[0]);
            } else {
                const info = result?.data?.data as LoginState;
                dispatch(login({ ...info }));
                navigate('/schedule');
            }
        }
    }, [result]);

    const isLoadding = () => {
        return result.isLoading;
    };

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
                    {isLoadding() && <Spinner />}
                </form>
            </div>
        </>
    )
}