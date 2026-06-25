import { useAuth } from "../context/AuthContext";
import "../styles/userProfile.css";
import { Link, useNavigate } from "react-router-dom";
import UserReview from "../components/UserReview";
import { useState, useEffect } from "react";
import ReviewDialog from "../components/ReviewDialog";

const API = import.meta.env.VITE_API_URL;

function UserProfile() {

    const navigate = useNavigate();
    const {user, logout} = useAuth();
  
    const [userReviews, setUserReviews] = useState([]);
    const [editingReview, setEditingReview] = useState(false);

    useEffect(() => {
        fetch(`${API}/api/profile`, { credentials: "include" })
            .then(res => res.json())
            .then(data => setUserReviews(data.reviews));
    }, []);

    function handleClick() {
        logout();
        navigate("/");
    }

    async function handleDelete(rId) {
        await fetch(`${API}/api/reviews/${rId}`, {
            method: "DELETE",
            credentials: "include",
        });
        setUserReviews(prev => prev.filter(r => r.id !== rId));
    }

    async function handleEdit(updatedReview) {
        await fetch(`${API}/api/reviews/${updatedReview.id}`, {
            method: "PUT",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ rating: updatedReview.rating, body: updatedReview.body }),
        });

        setUserReviews(prev => prev.map(r => r.id === updatedReview.id ? updatedReview : r));
        setEditingReview(false);
    }

    return(
        <>
            <nav id='profileNav'>
                <div id='leftNavContainer'>
                    <h3 id='navTitle'>TenantTrails</h3>
                </div>
                <div id='rightNavContainer'>
                    <Link to={`/user/${user.id}`}>{user?.initials}</Link>
                    <button id='dashboardSignOutButton' onClick={handleClick}>Sign Out</button>
                </div>
            </nav>
            <Link to='/dashboard' className='returnLink'>
                <span className='returnText'>{'<- Back to all apartments'}</span>
            </Link>
        <div id='userProfileContainer'>
            <div id="userProfileInfo">
                <h2>{user.name}</h2>
                <span>{user.email}</span>
            </div>
            <div id="userProfileStats">
                <div className="userStat">
                    <span className="userStatNumber">{userReviews.length}</span>
                    <span className="userStatLabel">REVIEWS</span>
                </div>
            </div>
        </div>
        <div id='userProfileReviewList'>
            <h3>Your Reviews</h3>
                {userReviews.map(review => (
                    <UserReview
                        key={review.id}
                        review={review}
                        handleDelete={handleDelete}
                        handleEdit={setEditingReview}
                    />
                ))}
        </div>
        {editingReview && (
            <div className="modalOverlay" onClick={() => setEditingReview(null)}>
                <div className="modalContent" onClick={e => e.stopPropagation()}>
                    <ReviewDialog
                        initialValues={editingReview}
                        isEditing={true}
                        onSubmit={({rating, body}) => handleEdit({...editingReview, rating, body})}
                        onClose={() => setEditingReview(null)}
                    />
                </div>
            </div>
        )}
        </>
    )
}

export default UserProfile;