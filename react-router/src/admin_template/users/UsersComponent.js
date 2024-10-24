import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function UsersComponent() {
    let navigate = useNavigate();

    // useEffect(() => {
    //     navigate('/');
    // }, []);

    return (
        <div>
            {/* <Navigate to="/" /> */}
            <h1>Users</h1>
        </div>
    )
}