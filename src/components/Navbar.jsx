import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <BottomNavigation>
      <StyledLink to="/">
        <i class="fa fa-search"></i>
        Search
      </StyledLink>
      <StyledLink to="/favorites">
        <i class="fa fa-heart"></i>
        Favorites
      </StyledLink>
    </BottomNavigation>
  );
};

const StyledLink = styled(Link)`
  text-align: center;
  width: 50%;
`;

const BottomNavigation = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center
  bottom: 0;
  left:0;
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  color: #1B3CEA;
  text-decoration: none;
  
  a:hover {
    text-decoration: none;
  }

  i {
    font-size: 30px;
    display:block
  }
`;

export default Navbar;
