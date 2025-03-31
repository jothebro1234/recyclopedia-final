import React, { useState } from 'react';
//import Navbar from '../components/Navbar';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getBase64 } from '../Pages/image_helper';
import './Scanner.css';

const Scanner = () => {
  const genAI = new GoogleGenerativeAI('AIzaSyABWevQovzTG8NZCP7KMSe8oJPeMxxo8NA');

  const [images, setImages] = useState([]);
  const [imageInlineData, setImageInlineData] = useState([]);
  const [aiResponse, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  async function aiImageRun() {
    setLoading(true);
    setResponse('');

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const responses = await Promise.all(imageInlineData.map(async (data) => {
      const result = await model.generateContent([
        "Return if the given object is recyclable or not in an average recycling center. Add a line break in between items. Make the response as short as possible and in this format:",
        "This material is [material]. This [is/is not] recyclable. [Any additional information]",
        data,
      ]);
      return result.response.text();
    }));

    setResponse(responses.join('\n\n'));
    setLoading(false);
  }

  const handleClick = () => {
    aiImageRun();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...images];
    const newInlineData = [...imageInlineData];

    files.forEach((file) => {
      if (newImages.length < 5) {
        getBase64(file)
          .then((result) => {
            newImages.push(result);
            setImages(newImages);
          })
          .catch(e => console.log(e));

        fileToGenerativePart(file).then((data) => {
          newInlineData.push(data);
          setImageInlineData(newInlineData);
        });
      }
    });
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
          <div key={index} className="image-wrapper">
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
