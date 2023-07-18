

// const API_BASE_URL = 'https://localhost:44339/api/employee/';

import { useCallback } from "react"
import axios from "axios"


export default function checkInService(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const serviceRequest = useCallback(async(requestConfig)=>{

        try{
            axios.defaults.baseURL='https://localhost:44339/api/';

            let response;

            if(requestConfig.method.toUpperCase() ==='GET' ) {
                response = await axios.get(requestConfig.baseURL,{
                    params:requestConfig.params,
                    responseType : requestConfig.responseType 
                })

            }
            else if(requestConfig.method ==='POST' ) {

                response =  await axios.post(requestConfig.url,requestConfig.body,{
                    params:requestConfig.params
                })
         
               
                console.log(response.request,'response')

            }
            return response;
        }
        
        catch(error){
            console.log(error)
        }
    },[])

    return{
        serviceRequest,
    }
}