import {
    Navigate,
    Outlet,
} from 'react-router-dom';

export const ProtectedRoute = ({
                            user,
                            redirectPath = '/login',
                            children,
                        }) => {

    console.log(user);

    if (!user.username) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};