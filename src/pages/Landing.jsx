import Button from "../components/Button";
import {useNavigate} from 'react-router-dom';
import '../styles/landing.css';
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function Landing({}) {

    const navigate = useNavigate();
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && user) {
            navigate("/dashboard");
        }
    }, [user, isLoading]);


    function goToLogin() {
        navigate("/login");
    }

    function goToSignup() {
        navigate("/signup");
    }

    return(
    <>
        <nav id='landingPageNav'>
        <p className='appTitle'>TenantTrails</p>
        <div id='navButtons'>
            <Button id='navSignInButton' label='Sign In' clickHandler={goToLogin} />
            <Button id='navGetStartedButton' label='Get Started' clickHandler={goToSignup} />
        </div>
      </nav>
      <section id='landingPageHero'>
        <p id='heroUpperText'>Launching in Halifax, Nova Scotia</p>
        <h1 id='heroMainText'>Know what you're signing before you sign it.</h1>
        <p id='heroBottomText'>
          Read honest reviews from past tenants. See AI-generated summaries. Make informed decisions about where you live.
        </p>
        <div id='heroButtons'>
            <Button id='heroCreateAccountButton' label='Create Free Account' clickHandler={goToSignup} />
            <Button id='heroSignInButton' label='Sign In' clickHandler={goToLogin} />
        </div>
      </section>
      <section id='featureDescription'>
        {/*todo: make these into a single reusable component with icon/title/text props*/} 
        <div id='reviewsDescription'>
          <div>⭐</div>
          <h3>Verified Reviews</h3>
          <p>Real ratings with photos and videos from past tenants.</p>
        </div>
        <div id='summariesDescription'>
          <div>🤖</div>
          <h3>AI Summaries</h3>
          <p>Key issues and sentiment extracted from every review.</p>
        </div>
        <div id='questionsDescription'>
          <div>💬</div>
          <h3>Ask Questions</h3>
          <p>Comment on reviews and get answers from past tenants.</p>
        </div>
      </section>

    </>
    )



}



export default Landing;