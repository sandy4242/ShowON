import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #666;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function Navbar() {
  const navigate = useNavigate();

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Collection Showcase</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <Button onClick={() => navigate('/create-collection')}>
            Create Collection
          </Button>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
