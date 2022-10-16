import { useEffect, useState } from "react";
import { useHttp } from "./useHttp"; 

function usePlanets(){

const [planets , setPlanets] = useState({});

async function fetchPlanets(){

    await fetch("https://swapi.dev/api/planets/1/").then( result => result.json())
    .then( (data) => {
            console.log(data);
            setPlanets(data);
    })
}

useEffect(() => {
    fetchPlanets();
} ,[]);

return { planets }
}

export default usePlanets