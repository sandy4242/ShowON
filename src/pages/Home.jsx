import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import CollectionList from '../components/collection/CollectionList';
import Button from '../components/common/Button';
import { useCollectionContext } from '../context/CollectionContext';
import { ROUTES } from '../utils/constants';

const Hero = styled.div`
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const FeaturedSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const CategoryCard = styled(Link)`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CategoryIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin: 0;
`;

const CategoryDescription = styled.p`
  color: #666;
  font-size: 0.875rem;
  margin: 0.5rem 0 0;
`;

function Home() {
  const { collections } = useCollectionContext();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Collectors
          </h1>
          <p className="text-xl mb-8">
            Showcase and manage your collections with ease
          </p>
          <Link
            to={ROUTES.REGISTER}
            className="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.slice(0, 6).map((collection) => (
              <div
                key={collection.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {collection.description}
                  </p>
                  <Link
                    to={`${ROUTES.COLLECTION_DETAILS}/${collection.id}`}
                    className="text-primary hover:text-primary-hover"
                  >
                    View Collection →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Art', 'Books', 'Coins', 'Comics', 'Fashion', 'Movies', 'Music', 'Sports'].map(
              (category) => (
                <Link
                  key={category}
                  to={`${ROUTES.COLLECTIONS}?category=${category}`}
                  className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold">{category}</h3>
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
