import { useParams } from "react-router-dom";
import ApartmentHeader from "../components/ApartmentHeader.jsx";
import AISummary from "../components/AISummary.jsx";
import PropertyInfo from "../components/PropertyInfo.jsx";
import {apartments, reviews} from "../data/mockData.js";
import ReviewCard from "../components/ReviewCard.jsx";
import SearchInput from "../components/SearchInput.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import '../styles/apartmentDetails.css'
import '../styles/dashboard.css'

function ApartmentDetails() {
    const {id} = useParams();
    const apartment = apartments.find(a => a.id == Number(id))
    const aptReviews = reviews.filter(r => r.apartmentId = id);

    const { user, logout } = useAuth();
    const navigate = useNavigate();

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
                <h2>{aptReviews.length} Review{aptReviews.length == 1 ? '' : 's'}</h2>
                {aptReviews.length > 0 && aptReviews.map(r => (
                    <ReviewCard key={r.id} review={r} />
                ))}
            </div>
        </>
    )
}

export default ApartmentDetails;