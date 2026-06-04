import { useState } from "react";
import ApartmentHeader from "../components/ApartmentHeader.jsx";
import AISummary from "../components/AISummary.jsx";
import PropertyInfo from "../components/PropertyInfo.jsx";
import ReviewDialog from "../components/ReviewDialog.jsx";
import {apartments, reviews} from "../data/mockData.js";
import ReviewCard from "../components/ReviewCard.jsx";
import SearchInput from "../components/SearchInput.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link, useParams } from "react-router-dom";
import '../styles/apartmentDetails.css'
import '../styles/dashboard.css'

function ApartmentDetails() {
    const {id} = useParams();
    const apartment = apartments.find(a => a.id == Number(id))
    const aptReviews = reviews.filter(r => r.apartmentId = id);

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [showReviewModal, setShowReviewModal] = useState(false);

    function handleClick() {
        logout();
        navigate("/");
    }

    return(
        <>
            <nav id='apartmentNav'>
                <div id='leftNavContainer'>
                    <h3 id='navTitle'>TenantTrails</h3>
                </div>
                <div id='rightNavContainer'>
                    <p>{user?.fullName.split(' ')[0]}</p>
                    <button id='dashboardSignOutButton' onClick={handleClick}>Sign Out</button>
                </div>
            </nav>
            <Link to='/dashboard' className='returnLink'>
                <span className='returnText'>{'<- Back to all apartments'}</span>
            </Link>
            <div id='apartmentDetailsContainer'>
                <ApartmentHeader apartment={apartment}/>
                <div id='aiSummaryPropertyInfoContainer'>
                    {apartment.aiSummaries && <AISummary summary={apartment.aiSummaries} issues={apartment.aiIssues} />}
                    {apartment.propertyInfo || apartment.neighbourhood && <PropertyInfo neighbourhood={apartment.neighbourhood}/>}
                </div>
                <div id='keyIssuesContainer'>
                    <h3>Key Issues</h3>
                    <div id='keyIssuesTags'>
                        {apartment.issues.map((issue) => (
                            <span className='issueTag' key={issue}>{issue}</span>
                        ))}
                    </div>
                </div>
                <div id='reviewContainer'>
                    <div id='reviewHeader'>
                        <h2 id='reviewHeader'>Reviews({aptReviews.length})</h2>
                        <button onClick={() => setShowReviewModal(true)}>+ Write a Review</button>
                    </div>
                    {aptReviews.length > 0 && aptReviews.map(r => (
                        <ReviewCard key={r.id} review={r} />
                    ))}
                </div>
            </div>
            {showReviewModal && (
                <div className="modalOverlay" onClick={() => setShowReviewModal(false)}>
                    <div className="modalContent" onClick={e => e.stopPropagation()}>
                        <ReviewDialog
                            onSubmit={() => console.log("Placeholder until backend is added :)")}
                            onClose={() => setShowReviewModal(false)} 
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default ApartmentDetails;