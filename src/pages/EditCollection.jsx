import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCollectionContext } from '../context/CollectionContext';
import { ROUTES } from '../utils/constants';

function EditCollection() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { collection, fetchCollection, updateCollection, loading } = useCollectionContext();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    isPublic: true,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCollection(id);
  }, [id, fetchCollection]);

  useEffect(() => {
    if (collection) {
      setFormData({
        title: collection.title,
        description: collection.description,
        category: collection.category,
        image: collection.image || '',
        isPublic: collection.isPublic,
      });
    }
  }, [collection]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await updateCollection(id, formData);
      navigate(`${ROUTES.COLLECTION_DETAILS}/${id}`);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Collection not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Collection</h1>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">Select a category</option>
            <option value="art">Art</option>
            <option value="books">Books</option>
            <option value="coins">Coins</option>
            <option value="comics">Comics</option>
            <option value="fashion">Fashion</option>
            <option value="movies">Movies</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="isPublic"
            name="isPublic"
            checked={formData.isPublic}
            onChange={handleChange}
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="isPublic" className="ml-2 block text-sm text-gray-700">
            Make collection public
          </label>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate(`${ROUTES.COLLECTION_DETAILS}/${id}`)}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCollection;
