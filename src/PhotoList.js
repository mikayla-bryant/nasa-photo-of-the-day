import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PhotoList(){
    const [photos, setPhotoData] = useState({});
    
    useEffect(() =>{
        //Requesting Data from NASA's API
        axios.get("https://api.nasa.gov/planetary/apod?api_key=L8R7te1c5tRd7ZcSuaj1Ax8mwSMa1kSu7avtY0hu")
             .then((response) => {
                 console.log('success!', response);
                 setPhotoData(response.data);
                 console.log(photos);
             })
             // 
             .catch((error) => {
                 console.log("Whoops. There was an error retrieving your data. Please check your work.", error);
             })
    }, [])


    return (
        <div>
            <h1>NASA Fun Fact of the Day!</h1>
            <p>Today, {photos.date}, we have a {photos.media_type} to share with you!</p>
            <h2>{photos.title}</h2>
            <p>{photos.explanation}</p>
            {photos.media_type ='video' ? <iframe width="560" height="315" src={photos.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : <img src={photos.url} alt="NASA photo of the day"/>}
        </div>
    )

}