import React from 'react';
import "./ImageGrallery.css";

const ImageGrallery = ({ fetchData }) => {
  return (
    <div>
        <div className='Images-wrapper'>
            {fetchData.map((data) => (

        <div className='image' key={data.id}>
            <a href={data.pageURL} target="_blank">
        <img 
         src={data.largeImageURL}
         alt=""/>
         </a>
        </div>

            ))}
        </div>
    </div>
  )
}

export default ImageGrallery