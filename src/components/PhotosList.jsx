import React from "react";
import Photo from "./Photo";
import { PropTypes } from "prop-types";

const PhotosList = ({ photos, handlePhotoClick }) => {
  let allPhotos = photos.map((photo) => (
    <Photo photo={photo} key={photo.id} handlePhotoClick={handlePhotoClick} />
  ));
  return (
    <div
      className="grid grid-flow-row md:grid-flow-col md:px-4 px-1 md:pb-10  
      md:w-11/12 h-4/5 md:h-auto auto-cols-max overflow-y-auto md:overflow-x-scroll 
      snap-y md:snap-x md:scrollbar-thin md:scrollbar-thumb-gray-200
      md:scrollbar-track-gray-500"
    >
      {allPhotos}
    </div>
  );
};

PhotosList.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      download_url: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PhotosList;
