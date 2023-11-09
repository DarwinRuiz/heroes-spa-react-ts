import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom";

interface Props {
    children: JSX.Element
}

export const PublicRoute = ({ children }: Props): JSX.Element => {

    const { logged } = useContext(AuthContext);

    return (!logged) ? children : <Navigate to="/" />
}
