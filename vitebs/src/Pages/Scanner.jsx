import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getBase64 } from '../Pages/image_helper';
import './Scanner.css';

const Scanner = () => {
  const [images, setImages] = useState([]);
  const [imageInlineData, setImageInlineData] = useState([]);
  const [aiResponse, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  function returnString(data) {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
    console.log(jsonData.predictions[0]);
    if (jsonData.predictions[0].displayNames.length == 0 || jsonData.predictions[0].displayNames[0] == "trash") {
      return "trash";
    } else {
      return "recyclable";
    }
  }

  async function aiImageRun() {
    setLoading(true);
    setResponse('');
    
    const responses = await Promise.all(imageInlineData.map(async (data) => {
      // Extract the base64 data from the imageInlineData object
      const imgFile = data.inlineData.data;
      
      // Use your existing functions with the base64 data
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer ya29.a0AeXRPp5dPTXH18sCRq9uosvWOSBst-uADsS0gTOjrOBBlyqeWSSu2wRjULSSAg-vimQWNg43xTf8ch0I-OVDLAiYsoxV7M5r_oudgEvs30-F1whel22k0dnUP1R53d-jFiZ2FHN-V1MvxYY7n3gpqXzI1fiqaOg_Sgosu8-auAaCgYKAb0SARMSFQHGX2Mi2zSfTpPMkTPxSwu1XeIOmQ0177");
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        "instances": [
          {
            "content": imgFile
          }
        ],
        "parameters": {
          "confidenceThreshold": 0.5,
          "maxPredictions": 5
        }
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
  
      try {
        const response = await fetch("https://us-central1-aiplatform.googleapis.com/v1/projects/299117746416/locations/us-central1/endpoints/5074823405790822400:predict", requestOptions);
        const result = await response.text();
        return returnString(result);
      } catch (error) {
        console.error("Error:", error);
        return "Error processing image";
      }
    }));
  
    setResponse(responses.join('\n\n'));
    setLoading(false);
  }

  const handleClick = () => {
    aiImageRun();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length >= 1) return; // Prevents adding more than 1 image

    const newImages = [...images];
    const newInlineData = [...imageInlineData];

    files.forEach((file) => {
      if (newImages.length < 1) {
        getBase64(file)
          .then((result) => {
            setImages(prevImages => [...prevImages, result]);
          })
          .catch(e => console.log(e));

        fileToGenerativePart(file).then((data) => {
          setImageInlineData(prevData => [...prevData, data]);
        });
      }
    });
  };

  const handleImageClick = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setImageInlineData(imageInlineData.filter((_, i) => i !== index));
  };

  async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(file);
    });

    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }

  return (
    <div className="scanner-container">
      <div className="upload-section">
        <input type="file" multiple onChange={handleImageChange} className="file-input" id="file-upload" />
        <label htmlFor="file-upload" className="upload-button">Upload Image</label>
        <button onClick={handleClick} className="search-button">Search</button>
      </div>

      <div className="image-gallery">
        {images.map((img, index) => (
          <div key={index} className="image-wrapper" onClick={() => handleImageClick(index)}>
            <img src={img} alt={`Uploaded ${index + 1}`} className="uploaded-image" />
          </div>
        ))}
      </div>

      {loading && !aiResponse ? (
        <p className="loading-text">Loading ...</p>
      ) : (
        <div className="response-container">
          <p className="ai-response">{aiResponse}</p>
        </div>
      )}
    </div>
  );
};

export default Scanner;
