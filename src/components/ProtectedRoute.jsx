import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const navigate = useNavigate();

    const user = useAuth();

    if (!user) {
        navigate("/landing");
    }
    
    return children;
}

export default ProtectedRoute;