import React, {useState, useEffect } from 'react'
import axios from "../../Movies/axios"
import requests from "../../Movies/requests"
import "./banner.css"
const Banner = () => {
    const[movie,setMovie]=useState([]);
    useEffect(()=>{
        (async()=>{
            try{
                const request= await axios.get(requests.fetchNetflixOrigionals)
                console.log(request);
                setMovie(request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                    
                ]);
      
                
                }
                catch(error){
                    console.log("error",error);
            }
        })()
    },[])
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+'...':str;
        
    }
  return (
    <div className='banner'
    style={{backgroundSize:"cover",
            backgroundImage:
            `url("https://image.tmdb.org/t/p/origional${movie?.backdrop_path}")`,
         
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
          
           
           
            }}
            
            >
               
                <div className='banner_contents'>
                    <h1 className='banner_title'>
                        {movie?.title||movie?.name||movie?.origional_name}

                    </h1>
                    <div className='banner_buttons'>
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>My List</button>
                       
                    </div>
                    <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>
                        

                </div>
                <div className='fade_buttonbottom'></div>

    </div>
  )
}

export default Banner