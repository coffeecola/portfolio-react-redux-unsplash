import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const PhotoList = ({
  handleUnlikeClick,
  handleLikeClick,
  images,
  liked = []
}) => {
  console.log(handleLikeClick);
  return (
    <ImageGrid className="image-grid">
      {images.map(img => {
        const isLiked = liked.find(i => i.id === img.id);
        return (
          <Link key={img.id} to={`/photos/${img.id}`}>
            <ImageWrapper>
              <img alt="" src={img.urls.regular}></img>
              <i
                className="fa fa-2x fa-heart"
                style={{
                  color: isLiked ? "#007bff" : "white"
                }}
                onClick={e => {
                  isLiked ? handleUnlikeClick(img) : handleLikeClick(img);
                  e.preventDefault();
                }}
              ></i>
            </ImageWrapper>
          </Link>
        );
      })}
    </ImageGrid>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 1em;
  margin-bottom: 80px;
  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default PhotoList;
