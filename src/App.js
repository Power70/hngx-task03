import './App.css';
 import React from 'react';
 import Gallery from './Gallery'; // Assuming Gallery.js is in the same directory
 import GalleryImages from './GalleryImages';
 
 const galleryImages = [
   // ... (Your image data here)
 ];
function App() {
  return (
    <div className="App">
          <h1>Image Gallery</h1>
      <Gallery images={GalleryImages} />
    </div>
  );
}

export default App;
