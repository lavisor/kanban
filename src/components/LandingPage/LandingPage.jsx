import usePlanets from  "../Hooks/usePlanets"; 
import "./LandingPage.scss"


function LandingPage(){
    console.log("test landing page:")
    const planets = usePlanets();
    console.log("planets: ", planets)
    return (
        <h1>
            This is the landing page
        </h1>
    )
}

export default LandingPage