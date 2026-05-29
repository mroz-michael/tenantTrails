import '../styles/dashboard.css';
import {useState} from "react";
import SearchInput from "../components/SearchInput";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { apartments } from '../data/mockData';

function Dashboard({}){
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [neighbourhoodFilter, setNeighbourhoodFilter] = useState('all');
    const [sortCriteria, setSortCriteria] = useState("highest");

    const numApartments = apartments?.length;
    const numReviews = apartments?.reduce((runningTotal, apt) => runningTotal + apt.numReviews, 0);
    const distinctNeighbourhoods = new Set(apartments?.map(a => a.neighbourhood));
    const numNeighbourhoods = distinctNeighbourhoods?.size;

    function handleClick() {
        logout();
        navigate("/");
    }

    const filteredApartments = 
        apartments?.filter(a => neighbourhoodFilter == "all" || a.neighbourhood == neighbourhoodFilter)
        .sort((a, b) => {
            if (sortCriteria == 'highest') {
                return b.rating - a.rating;
            }
            if (sortCriteria == 'lowest') {
                return a.rating - b.rating;
            }
            if (sortCriteria == 'mostReviews') {
                return b.numReviews - a.numReviews;
            }
            if (sortCriteria == 'name') {
                return a.name > b.name ? 1 : -1;
            }
        })


    return(
        <div id='dashboardContainer'>
            <nav id='dashboardNav'>
                <div id='leftNavContainer'>
                    <h3 id='navTitle'>TenantTrails</h3>
                    <SearchInput placeholder="Search apartments by address or neighbourhood..."/>
                </div>
                <div id='rightNavContainer'>
                    <p>{user?.fullName.split(' ')[0]}</p>
                    <button id='dashboardSignOutButton' onClick={handleClick}>Sign Out</button>
                </div>
            </nav>
            <main id='apartmentSection'>
                <h3>Apartments in Halifax</h3>
                <p className='dashboardLightText'>Honest reviews from real tenants. Read before you rent.</p>
                <div id='dashboardAggregateData'>
                   <span className='dataItem'>{numApartments} apartments</span>
                   <span className='dataItem'>{numReviews} reviews</span>
                   <span className='dataItem'>{numNeighbourhoods} neighbourhoods</span>
                </div>
                <div id='dashboardFilters'>
                    <select id='neighbourhoodFilter' value={neighbourhoodFilter} onChange={e => setNeighbourhoodFilter(e.target.value)}>
                    <option value="all">All Neighbourhoods</option>
                    {[...distinctNeighbourhoods].map(n => (
                        <option key={n} value={n}>{n}</option>
                    ))}
                    </select>
                    <select id='sortFilter' value={sortCriteria} onChange={e => setSortCriteria(e.target.value)}>
                        <option value="highest">Highest Rated</option>
                        <option value="lowest">Lowest Rated</option>
                        <option value="mostReviews">Most Reviews</option>
                        <option value="name">Alphabetical (A to Z)</option>
                    </select>
                </div>
            </main>
        </div>
    )
}

export default Dashboard;