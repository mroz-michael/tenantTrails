import { useState, useEffect } from "react";
import ApartmentHeader from "../components/ApartmentHeader.jsx";
//import AISummary from "../components/AISummary.jsx";
import ReviewDialog from "../components/ReviewDialog.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import SearchInput from "../components/SearchInput.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link, useParams } from "react-router-dom";
import '../styles/apartmentDetails.css'
import '../styles/dashboard.css'

const API = import.meta.env.VITE_API_URL;

function ApartmentDetails() {
    const {id} = useParams();

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [apartment, setApartment] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [showReviewModal, setShowReviewModal] = useState(false);

    useEffect(() => {
        fetch(`${API}/api/apartments/${id}`, { credentials: "include" })
            .then(res => res.json())
            .then(data => {
                const { reviews, ...apt } = data;
                setApartment(apt);
                setReviews(reviews);
            });
    }, [id]);

    function handleClick() {
        logout();
        navigate("/");
    }

    async function addReview(details) {
        const {rating, body} = details;

        const res = await fetch(`${API}/api/apartments/${id}/reviews`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ rating, body }),
        });

        const newReview = await res.json();
        setReviews(previousReviews => [newReview, ...previousReviews])
        setShowReviewModal(false);
    }

    if (!apartment) {
        return;
    }

    return(
        <>
            <nav id='apartmentNav'>
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
            <div id='apartmentDetailsContainer'>
                <ApartmentHeader apartment={apartment}/>
                {/* <div id='aiSummaryPropertyInfoContainer'>
                    {apartment.aiSummaries && <AISummary summary={apartment.aiSummaries} issues={apartment.aiIssues} />}
                    {apartment.propertyInfo || apartment.neighbourhood && <PropertyInfo neighbourhood={apartment.neighbourhood}/>}
                </div> */}
                {/* <div id='keyIssuesContainer'>
                    <h3>Key Issues</h3>
                    <div id='keyIssuesTags'>
                        {apartment.issues.map((issue) => (
                            <span className='issueTag' key={issue}>{issue}</span>
                        ))}
                    </div>
                </div> */}
                <div id='reviewContainer'>
                    <div id='reviewHeader'>
                        <h2>Reviews({reviews.length})</h2>
                        <button id='writeReviewButton' onClick={() => setShowReviewModal(true)}>+ Write a Review</button>
                    </div>
                    {reviews.length > 0 && reviews.map(r => (
                        <ReviewCard key={r.id} review={r} />
                    ))}
                </div>
            </div>
            {showReviewModal && (
                <div className="modalOverlay" onClick={() => setShowReviewModal(false)}>
                    <div className="modalContent" onClick={e => e.stopPropagation()}>
                        <ReviewDialog
                            onSubmit={addReview}
                            onClose={() => setShowReviewModal(false)} 
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default ApartmentDetails;