import React, { useState, useEffect } from "react";
import { unsplash, toJson } from "../utils/unsplashUtils";
import styled from "styled-components";

const Details = props => {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState({});

  useEffect(() => {
    const {
      match: {
        params: { id }
      }
    } = props;

    unsplash.photos
      .getPhoto(id)
      .then(toJson)
      .then(({ location, downloads, urls, user, likes }) => {
        setImg({ location, downloads, urls, user, likes });
        setLoading(false);
      });
  });

  return loading ? (
    <div>loading</div>
  ) : (
    <React.Fragment>
      <ImgWrapper>
        <div onClick={() => props.history.go(-1)}>
          <i class="fa fa-arrow-left"></i>
        </div>

        <img alt="" src={img.urls.regular} />
      </ImgWrapper>
      <DetailsContainer>
        <div className="downloads">
          <span className="subTitle">Downloads</span>
          <span className="title">{img.downloads}</span>
        </div>
        <div className="country">
          <span className="subTitle">Country</span>
          <span className="title">{img.location.country}</span>
        </div>
        <div className="user">
          <span className="subTitle">User</span>
          <span className="title">{img.user.name}</span>
        </div>
        <div className="likes">
          <span className="subTitle">Likes</span>
          <span className="title">{img.likes}</span>
        </div>
      </DetailsContainer>
    </React.Fragment>
  );
};
const ImgWrapper = styled.div`
  height: 450px;
  margin: -16px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  i {
    position: fixed;
    color: white;
    left: 30px;
    top: 30px;
    font-size: 30px;
    cursor: pointer;
  }
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "downloads country" "user likes";
  height: 200px;
  margin-top: 35px;
  .subTitle {
    display: block;
    font-family: apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: #9aa5b1;
  }
  .title {
    font-family: apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 24px;
    line-height: 29px;
    color: #1f2933;
  }
  .downloads {
    grid-area: downloads;
  }

  .country {
    grid-area: country;
  }

  .user {
    grid-area: user;
  }

  .likes {
    grid-area: likes;
  }
`;

export default Details;
