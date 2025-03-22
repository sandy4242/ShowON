import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

function CollectionList({ collections }) {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (collectionId) => {
    setImageErrors(prev => ({
      ...prev,
      [collectionId]: true
    }));
  };

  if (!collections || collections.length === 0) {
    return (
      <div className="text-center py-8" role="status">
        <p className="text-gray-600">No collections found.</p>
      </div>
    );
  }

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      role="list"
      aria-label="Collections"
    >
      {collections.map((collection) => (
        <Link
          key={collection.id}
          to={`${ROUTES.COLLECTION_DETAILS}/${collection.id}`}
          className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
          role="listitem"
          aria-label={`Collection: ${collection.title}`}
        >
          {collection.image && !imageErrors[collection.id] && (
            <div className="relative h-48">
              <img
                src={collection.image}
                alt={`${collection.title} thumbnail`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => handleImageError(collection.id)}
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
            <p className="text-gray-600 mb-2 line-clamp-2">{collection.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="capitalize">{collection.category}</span>
              <span>{collection.items?.length || 0} items</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

CollectionList.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          description: PropTypes.string,
          image: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default CollectionList; 