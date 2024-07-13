import React, { useState } from 'react';
import axios from 'axios';

const ImageFetcher = () => {
  const [imageTag, setImageTag] = useState('');
  const [imageFiles, setImageFiles] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);
  const [similarImages, setSimilarImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedimage,setselectedimage]=useState('');

  const imageExtensions = ['jpg', 'jpeg', 'png','gif','webp'];

  const handleInputChange = (e) => {
    setselectedimage('');
    setImageTag(e.target.value);
  };

  const handleFetchImages = async () => {
    setLoading(true);
    setError('');
    setImageFiles([]);
    setSimilarImages([]);
    try {
      const response = await axios.post('http://localhost:5000/fetch-images', { usertag: imageTag });
      if (response.data.result === 'success') {
        setImageFiles(response.data.urls);
        console.log(response.data.urls);
        setSimilarImages([]);
      } else {
        setError('Failed to fetch images');
      }
    } catch (err) {
      setError('Failed to fetch images');
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async (index) => {
    setLoading(true);
    setError('');
    try {
      let si=getImageSrc(`image_${index}`);
      setselectedimage(si);
      const response = await axios.post('http://localhost:5000/', { index });
      if (response.data.similar_images) {
       
        setSimilarImages(response.data.similar_images);
        
       
      } else {
        setError('Failed to fetch similar images');
      }
    } catch (err) {
      setError('Failed to fetch similar images');
    } finally {
      setLoading(false);
    }
  };

  const getImageSrc = (baseName) => {
    for (let ext of imageExtensions) {
      try {
        
        
        
          

        return require(`./downloaded_images/${baseName}.${ext}`);
        
        
      } catch (err) {
          continue;
      }
    }
    return ''; 
  };

  const getSimilarImageSrc = (baseName) => {
    for (let ext of imageExtensions) {
      try {
       
     
        return require(`./images/${baseName}.${ext}`);
        
      } catch (err) {
           continue;
      }
    }
    return ''; 
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Image Fetcher</h1>
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={imageTag} 
          onChange={handleInputChange} 
          placeholder="Enter image tag" 
          style={{ padding: '10px', width: '300px' }} 
        />
        <button onClick={handleFetchImages} style={{ padding: '10px 20px', marginLeft: '10px' }}>
          Fetch Images
        </button>
      </div>
      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {selectedimage.length>0 && 
        <>
        <h>Selected image</h>
          <div style={{ margin: '10px' }}>
            <img 
            src={selectedimage} 
            alt={`Similar image ${selectedimage}`} 
            style={{ width: '150px', height: '150px' }} 
          />
        </div>
        </>
        }
      </div>
      {similarImages.length > 0 && <h>Recommended Similar items for you</h>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>

      {similarImages.length > 0 && similarImages.map((file, index) => (
        
          <div key={index} style={{ margin: '10px' }}>
            <img 
              src={getSimilarImageSrc(file)} 
              alt={`Similar image ${file}`} 
              style={{ width: '150px', height: '150px' }} 
            />
          </div>
        ))}
        </div>
      
        {imageFiles.length > 0 && <h>Trending item from #{imageTag}</h>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      
     
        {imageFiles.length > 0 && imageFiles.map((file, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img 
              src={getImageSrc(`image_${index}`)} 
              alt={`Fetched from ${imageTag}`} 
              style={{ width: '150px', height: '150px' }} 
            />
            <button onClick={() => handleClick(index)} style={{ display: 'block', marginTop: '10px' }}>
              Recommend like this
            </button>
          </div>
        ))}
            </div>
    </div>
  );
};

export default ImageFetcher;
