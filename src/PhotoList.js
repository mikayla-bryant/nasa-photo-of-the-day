import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PhotoList(){
    const [photos, setPhotoData] = useState({});
    
    useEffect(() =>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=L8R7te1c5tRd7ZcSuaj1Ax8mwSMa1kSu7avtY0hu")
             .then((response) => {
                 console.log('success!', response);
                 setPhotoData(response.data);
                 console.log(photos);
             })
             .catch((error) => {
                 console.log("Whoops. There was an error retrieving your data. Please check your work.")
             })
    }, [])

    return (
        <div>
            <p>Image</p>
            <a href={photos.url}>Video of the Day</a>
        </div>
    )

}