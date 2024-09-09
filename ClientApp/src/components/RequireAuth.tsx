import { useEffect } from "react";
import { selectLoginState } from "../pages/login/loginSlice";
import { useAppSelector } from "../utils/hooks";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export function RequireAuth({children}: {children:JSX.Element}){
    const state = useAppSelector(selectLoginState);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!state.token) {
            navigate('/', { replace: true });
        }
    }, [state.token]);

    if (!state.token) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return children;
}

