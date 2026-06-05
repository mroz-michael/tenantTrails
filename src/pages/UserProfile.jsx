import { useAuth } from "../context/AuthContext";
import "../styles/userProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { reviews, apartments, removeReview } from "../data/mockData";
import UserReview from "../components/UserReview";
import { useState } from "react";
import ReviewDialog from "../components/ReviewDialog";

function UserProfile() {
    const navigate = useNavigate();
    const {authUser, logout} = useAuth();
    //temporary for easy debugging:
    const user = authUser ||  {id: 1, fullName: "Michael Mroz", email: "mroz@example.com"};
    const [userReviews, setUserReviews] = useState(reviews.filter(r => r.userId == user.id));
    const [editingReview, setEditingReview] = useState(false);

    function handleClick() {
        logout();
        navigate("/");
    }

    function handleDelete(rId) {
        const newReviews = userReviews.filter(r => r.id != rId);
        setUserReviews(newReviews);
        removeReview(rId);
    }

    function handleEdit(updatedReview) {
        setUserReviews(prev => prev.map(r => r.id === updatedReview.id ? updatedReview : r))
        setEditingReview(false);
    }

    return(
        <>
            <nav id='profileNav'>
                <div id='leftNavContainer'>
                    <h3 id='navTitle'>TenantTrails</h3>
                </div>
                <div id='rightNavContainer'>
                    <Link to={`/user/${user.id}`}>{user?.fullName.split(' ')[0]}</Link>
                    <button id='dashboardSignOutButton' onClick={handleClick}>Sign Out</button>
                </div>
            </nav>
            <Link to='/dashboard' className='returnLink'>
                <span className='returnText'>{'<- Back to all apartments'}</span>
            </Link>
        <div id='userProfileContainer'>
            <div id="userProfileInfo">
                <h2>{user.fullName}</h2>
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
            {userReviews.map(review => {
                const apartment = apartments.find(a => a.id == review.apartmentId);
                return <UserReview key={review.id} review={review} apartment={apartment} handleDelete={handleDelete} handleEdit={setEditingReview}/>
            })}
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