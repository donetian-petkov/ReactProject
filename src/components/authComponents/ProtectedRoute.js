import {
    Navigate,
    Outlet,
} from 'react-router-dom';

export const ProtectedRoute = ({
                            user,
                            redirectPath = '/login',
                            children,
                        }) => {

    console.log('This comes from Protected Route');
    console.log(user);

    if (Object.keys(user).length === 0) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};