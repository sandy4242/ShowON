import { useState, useEffect } from 'react';

export function useCollection(collectionId = null) {
  const [collection, setCollection] = useState(null);
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch a single collection
  const fetchCollection = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      // Replace with actual API call
      const response = await fetch(`/api/collections/${id}`);
      if (!response.ok) throw new Error('Failed to fetch collection');
      const data = await response.json();
      setCollection(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch all collections
  const fetchCollections = async (filters = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      // Replace with actual API call
      const queryString = new URLSearchParams(filters).toString();
      const response = await fetch(`/api/collections?${queryString}`);
      if (!response.ok) throw new Error('Failed to fetch collections');
      const data = await response.json();
      setCollections(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Create a new collection
  const createCollection = async (collectionData) => {
    setIsLoading(true);
    setError(null);
    try {
      // Replace with actual API call
      const response = await fetch('/api/collections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(collectionData),
      });
      if (!response.ok) throw new Error('Failed to create collection');
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

  // Update a collection
  const updateCollection = async (id, collectionData) => {
    setIsLoading(true);
    setError(null);
    try {
      // Replace with actual API call
      const response = await fetch(`/api/collections/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(collectionData),
      });
      if (!response.ok) throw new Error('Failed to update collection');
      const data = await response.json();
      setCollection(data);
      setCollections(prev => 
        prev.map(c => c.id === id ? data : c)
      );
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Delete a collection
  const deleteCollection = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      // Replace with actual API call
      const response = await fetch(`/api/collections/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete collection');
      setCollection(null);
      setCollections(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch collection on mount if ID is provided
  useEffect(() => {
    if (collectionId) {
      fetchCollection(collectionId);
    }
  }, [collectionId]);

  return {
    collection,
    collections,
    isLoading,
    error,
    fetchCollection,
    fetchCollections,
    createCollection,
    updateCollection,
    deleteCollection,
  };
}
