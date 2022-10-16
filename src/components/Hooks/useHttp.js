import { useState , useEffect } from "react";

const useHttp = (requestConfig, applyDataTransform) => {
    const [ isLoading , setIsLoading] = useState(false);
    const [ error , setError ] = useState(null);

    const sendRequest = async () => {
        setIsLoading(true);
        setError(null);
        try{
            const response = await fetch(requestConfig.url , {
                method: requestConfig.method ? requestConfig.method : "GET", 
                headers: requestConfig.headers ? requestConfig.headers : {}, 
                body: requestConfig.body ? JSON.stringify(requestConfig.body): null
            });

            if(!response.ok){
               // throw
            }
            let data = await response.data();
            applyDataTransform(data)

        } catch(error){
            setError(error.message)
        }
    }


    return { isLoading: isLoading , error: error , sendRequest}
} 

export { useHttp } 