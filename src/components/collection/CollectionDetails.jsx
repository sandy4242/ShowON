import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import Loading from '../common/Loading';

function CollectionDetails({ collection, onDelete, isLoading }) {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (itemId) => {
    setImageErrors(prev => ({
      ...prev,
      [itemId]: true
    }));
  };

  if (isLoading) {
    return <Loading text="Loading collection details..." />;
  }

  if (!collection) {
    return (
      <div className="text-center py-8" role="alert">
        <p className="text-gray-600">Collection not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {collection.image && !imageErrors[collection.id] && (
        <div className="relative h-48">
          <img
            src={collection.image}
            alt={`${collection.title} cover image`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => handleImageError(collection.id)}
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">{collection.title}</h2>
            <p className="text-gray-600">Category: <span className="capitalize">{collection.category}</span></p>
          </div>
          <div className="flex space-x-2">
            <Link
              to={`${ROUTES.EDIT_COLLECTION}/${collection.id}`}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`Edit ${collection.title}`}
            >
              Edit
            </Link>
            <button
              onClick={() => onDelete(collection.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={`Delete ${collection.title}`}
            >
              Delete
            </button>
          </div>
        </div>

        <p className="text-gray-700 mb-6">{collection.description}</p>

        <div className="border-t pt-4">
          <h3 className="text-xl font-semibold mb-4">Items</h3>
          {collection.items && collection.items.length > 0 ? (
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              role="list"
              aria-label="Collection items"
            >
              {collection.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg p-4"
                  role="listitem"
                >
                  {item.image && !imageErrors[item.id] && (
                    <img
                      src={item.image}
                      alt={`${item.name} thumbnail`}
                      className="w-full h-32 object-cover rounded-md mb-2"
                      loading="lazy"
                      onError={() => handleImageError(item.id)}
                    />
                  )}
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600" role="status">No items in this collection yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

CollectionDetails.propTypes = {
  collection: PropTypes.shape({
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
  }),
  onDelete: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

CollectionDetails.defaultProps = {
  isLoading: false,
};

export default CollectionDetails; 