import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'

function ApiProgress() {
    const[pendingApicall, setPendingApicall]=useState(false);
  
  
    useEffect(() => {
       axios.interceptors.request.use(request=>{
        setPendingApicall(true);
        return request
       });
       axios.interceptors.request.use(request=>{
        setPendingApicall(false);
        return request
       },
       error=>{
        setPendingApicall(false);
        throw error;
       }
       );
        
   
    });
}

export default ApiProgress