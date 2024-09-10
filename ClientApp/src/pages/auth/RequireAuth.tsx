import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks";
import { selectLoginState } from "./authSlice";
import { isTokenExpired } from "../../utils/tokenUtil";

export function RequireAuth({ children }: { children: JSX.Element }) {
    const state = useAppSelector(selectLoginState);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (state.token !== null && !isTokenExpired(state.token)) {
            navigate('/', { replace: true });
        }
    }, []);

    if (!state.token || isTokenExpired(state.token)) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return children;
}

