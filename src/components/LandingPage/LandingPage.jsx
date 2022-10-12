import "./LandingPage.scss";

function LandingPage() {
  return (
    <div className="fst-container">
      <div className="inner-container">
        <div className="left-container">
          <div className="text-container">
            <h1 class="font-wt- font-mgn- font-lnh- heading">
              {" "}
              Move fast, stay aligned, and build better - together{" "}
            </h1>
            <p class="font-wt- font-mgn- font-lnh- sub-heading">
              {" "}
              Kanban helps teams work more collaboratively and get more done.{" "}
            </p>
            <div className="btn-container">
              <button className="btn btn-primary"> Get Started </button>
            </div>
          </div>
        </div>
        <div className="right-container">
            <img
                src="https://wac-cdn.atlassian.com/dam/jcr:4ddaea11-b00e-4546-8241-25f45689fed6/hero-illustration.png?cdnVersion=573"
                alt="kanban board"
            />
           </div> 
      </div>
    </div>
  );
}

export default LandingPage;
