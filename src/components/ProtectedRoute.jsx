import { useAuth } from "../context/AuthContext";
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return;
    }

    if (!user) {
       return <Navigate to='/'/>
    }
    
    return children;
}

export default ProtectedRoute;