import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.imageUrl} alt={image.name} />
          <p>{`${image.name} (ID: ${image.id})`}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
