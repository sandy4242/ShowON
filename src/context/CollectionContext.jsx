import React, { createContext, useContext, useState } from 'react';

const CollectionContext = createContext(null);

export function CollectionProvider({ children }) {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCollections = async (filters = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetch(`/api/collections?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch collections');
      }

      const data = await response.json();
      setCollections(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCollection = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/collections/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch collection');
      }

      const data = await response.json();
      setSelectedCollection(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const createCollection = async (collectionData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/collections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(collectionData),
      });

      if (!response.ok) {
        throw new Error('Failed to create collection');
      }

      const data = await response.json();
      setCollections(prev => [...prev, data]);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateCollection = async (id, collectionData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/collections/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(collectionData),
      });

      if (!response.ok) {
        throw new Error('Failed to update collection');
      }

      const data = await response.json();
      setCollections(prev => prev.map(collection => 
        collection.id === id ? data : collection
      ));
      if (selectedCollection?.id === id) {
        setSelectedCollection(data);
      }
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCollection = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/collections/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete collection');
      }

      setCollections(prev => prev.filter(collection => collection.id !== id));
      if (selectedCollection?.id === id) {
        setSelectedCollection(null);
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    collections,
    selectedCollection,
    isLoading,
    error,
    fetchCollections,
    fetchCollection,
    createCollection,
    updateCollection,
    deleteCollection,
    setSelectedCollection,
  };

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollectionContext() {
  const context = useContext(CollectionContext);
  if (!context) {
    throw new Error('useCollectionContext must be used within a CollectionProvider');
  }
  return context;
} 