import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Card = styled(Link)`
  display: block;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 60%; // 16:9 aspect ratio
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: #333;
`;

const Description = styled.p`
  margin: 0 0 1rem;
  color: #666;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #666;
`;

const Category = styled.span`
  background-color: #e9ecef;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  color: #495057;
`;

const ItemCount = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function CollectionItem({ collection }) {
  const { id, title, description, thumbnail, itemCount, category } = collection;

  return (
    <Card to={`/collection/${id}`}>
      <ImageContainer>
        <Image src={thumbnail} alt={title} />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Meta>
          <Category>{category}</Category>
          <ItemCount>
            <span>📦</span>
            {itemCount} items
          </ItemCount>
        </Meta>
      </Content>
    </Card>
  );
}

export default CollectionItem; 