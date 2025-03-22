import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { useCollectionContext } from 'C:/Users/sande/Desktop/Collectors/src/context/CollectionContext.jsx';
import { useAuthContext } from '@/contexts/AuthContext';
import { ROUTES } from '@/utils/constants';
import CollectionList from '@/components/collection/CollectionList';
import Loading from '@/components/common/Loading';
import ErrorBoundary from '@/components/common/ErrorBoundary';

function Collections() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { collections, loading, error, fetchCollections } = useCollectionContext();
  const [filters, setFilters] = useState({
    category: '',
    search: '',
  });

  const debouncedFetchCollections = useCallback(
    (filters) => {
      fetchCollections(filters);
    },
    [fetchCollections]
  );

  const debouncedFetchWithDelay = debounce(debouncedFetchCollections, 300);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    debouncedFetchWithDelay(newFilters);
  };

  const handleCreateCollection = () => {
    navigate(ROUTES.CREATE_COLLECTION);
  };

  if (loading) {
    return <Loading text="Loading collections..." />;
  }

  if (error) {
    return (
      <div className="text-center py-8" role="alert">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Collections</h1>
        {user && (
          <button
            onClick={handleCreateCollection}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Create new collection"
          >
            Create Collection
          </button>
        )}
      </div>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="search"
          placeholder="Search collections..."
          value={filters.search}
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Search collections"
        />
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          <option value="books">Books</option>
          <option value="movies">Movies</option>
          <option value="music">Music</option>
          <option value="art">Art</option>
          <option value="other">Other</option>
        </select>
      </div>

      <ErrorBoundary>
        <CollectionList collections={collections} />
      </ErrorBoundary>
    </div>
  );
}

export default Collections; 