import usePlanets from  "../Hooks/usePlanets"; 
import "./LandingPage.scss"

function LandingPage() {
    console.log("test landing page:")
    const planets = usePlanets();
    console.log("planets: ", planets)
  return (
    <div className="main">
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

      <div className="second-container">
        <div className="second-inner-container">
          <div className="text-center">
            <h2>Overview</h2>
            <p>
              Kanban is a framework that provides visibility to an entire
              process and is commonly used for agile and DevOps to drive
              continuous delivery and improvement. The kanban template in Jira
              Software helps teams easily design, manage and improve their
              workflow while providing transparency as work moves from to-do to
              done.
            </p>
           
          </div>
          <div className="overview-img-container">
             
             </div>
        </div>
      </div>


      <div className="third-container">
        <div className="third-inner-container">
          <div className="text-center">
            <h2>How to get started with the kanban template</h2>
            <div className="image-text-container-one">
              <h1>1. Choose your project</h1>
              
              <p>
              Before you jump into your project, you will be prompted to choose a project type: team-managed or company-managed. Team-managed templates are setup and maintained by the individual team, and are ideal for autonomous teams who wish to control their own working processes, practices, and project settings in a self-contained way. Company-managed projects are designed for teams who want to collaborate and work with other teams across many projects in a standardized way.
              </p>
              </div>

              <div className="image-text-container-two">
              <h1>2. Organize and prioritize the Kanban board</h1>
              
              <p>
              The kanban board is a visual representation of all your team's work. Each column on the board represents the phases or steps work items pass through from to-do to completion. Having transparency into your workflow and effectively establishing work in progress (WIP) limits will help your team quickly spot and clear bottlenecks.
              </p>
              </div>

              <div className="image-text-container-three">
              <h1>3. Continuously improve with agile reports</h1>
              
              <p>
              One of the key tenets of kanban is optimizing flow for continuous delivery. Agile reports offer critical insights to better predict future performance. The kanban template comes with a cumulative flow diagram, control charts, and a multitude of other reports that analyze issues, help with forecasting, and much more. Create a single snapshot of all your critical data points and reports with customizable dashboards.
              </p>
              </div>
            </div>
            </div>
            <div className="btn-container">
          <button className="btn btn-primary"> Get Started </button>
          </div>
        </div>
       

       <div className="fourth-container">
        <div className="fourth-inner-container">
          <div className="text-center">
          </div>
          </div>
          </div>
    </div>
  );
}

export default LandingPage;
