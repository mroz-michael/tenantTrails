import '../styles/dashboard.css';
import {useState} from "react";
import SearchInput from "../components/SearchInput";
import { useAuth } from "../context/AuthContext";

function Dashboard({}){
    const { user, logout } = useAuth();

    return(
        <div id='dashboardContainer'>
            <nav id='dashboardNav'>
                <div id='leftNavContainer'>
                    <h3>TenantTrails</h3>
                    <SearchInput placeholder="Search apartments by address or neighbourhood..."/>
                </div>
                <div id='rightNavContainer'>
                </div>
            </nav>
        </div>
    )
}

export default Dashboard;