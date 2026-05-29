import '../styles/dashboard.css';
import {useState} from "react";
import SearchInput from "../components/SearchInput";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { apartments } from '../data/mockData';

function Dashboard({}){
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const numApartments = apartments?.length;
    const numReviews = apartments?.reduce((runningTotal, apt) => runningTotal + apt.numReviews, 0);
    const distinctNeighbourhoods = new Set(apartments?.map(a => a.neighbourhood));
    const numNeighbourhoods = distinctNeighbourhoods?.size;

    function handleClick() {
        logout();
        navigate("/");
    }

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
            <main>
                <h3>Apartments in Halifax</h3>
                <p className='dashboardLightText'>Honest reviews from real tenants. Read before you rent.</p>
                <div id='dashboardAggregateData'>
                   <span className='dataItem'>{numApartments} apartments</span>
                   <span className='dataItem'>{numReviews} reviews</span>
                   <span className='dataItem'>{numNeighbourhoods} neighbourhoods</span>
                   {/* todo next: add css for the div and dataItems*/}
                </div>
            </main>
        </div>
    )
}

export default Dashboard;