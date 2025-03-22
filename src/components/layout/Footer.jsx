import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #666;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #333;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #dee2e6;
  color: #666;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <p>Collection Showcase is a platform for collectors to display and share their prized collections with the world.</p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/create-collection">Create Collection</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Connect With Us</h3>
          <ul>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </FooterSection>
      </FooterContent>
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Collection Showcase. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
