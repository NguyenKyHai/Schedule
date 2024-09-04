import { useForm, SubmitHandler } from "react-hook-form"
import './index.css';

type Inputs = {
    userId: string
    password: string
}

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label id="lable-userid">Login ID</label>
                        <input {...register("userId")} id="login-id" className="login login-id" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label id="lable-password">Login Password</label>
                        <input {...register("password", { required: true })} id="login-password" className="login login-password" />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="submit" className="submit" />
                    </div>
                </form>
            </div>
        </>
    )
}