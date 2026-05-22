import './App.css'

function App() {

  return (
    <>
      <nav id='landingPageNav'>
        <p className='appTitle'>TenantTrails</p>
        <div id='navButtons'>
          <button id='navSignInButton'>Sign In</button>
          <button id='navGetStartedButton'>Get Started</button>
        </div>
      </nav>
      <section id='landingPageHero'>
        <p id='heroUpperText'>Launching in Halifax, Nova Scotia</p>
        <h1 id='heroMainText'>Know what you're signing before you sign it.</h1>
        <p id='heroBottomText'>
          Read honest reviews from past tenants. See AI-generated summaries. Make informed decisions about where you live.
        </p>
        <div id='heroButtons'>
          <button id='heroCreateAccountButton'>Create Free Account</button>
          <button id='heroSignInButton'>Sign In</button>
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

export default App
