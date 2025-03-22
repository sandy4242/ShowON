import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCollectionContext } from '../context/CollectionContext';
import { useAuthContext } from '../context/AuthContext';
import { ROUTES } from '../utils/constants';
import Loading from '../components/common/Loading';

function CollectionDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuthContext();
  const { collection, fetchCollection, deleteCollection, loading, error } = useCollectionContext();
  const [deleteError, setDeleteError] = useState('');

  useEffect(() => {
    fetchCollection(id);
  }, [id, fetchCollection]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this collection?')) {
      try {
        setDeleteError('');
        await deleteCollection(id);
        navigate(ROUTES.COLLECTIONS);
      } catch {
        setDeleteError('Failed to delete collection. Please try again.');
      }
    }
  };

  if (loading) {
    return <Loading text="Loading collection details..." />;
  }

  if (!collection) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Collection not found.</p>
      </div>
    );
  }

  const isOwner = user && user.id === collection.userId;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {(error || deleteError) && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md mb-6" role="alert">
          {error || deleteError}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {collection.image && (
          <div className="relative h-64">
            <img
              src={collection.image}
              alt={collection.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{collection.title}</h1>
              <p className="text-gray-600">Category: {collection.category}</p>
            </div>
            {isOwner && (
              <div className="flex space-x-2">
                <button
                  onClick={() => navigate(`${ROUTES.EDIT_COLLECTION}/${id}`)}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover"
                  aria-label="Edit collection"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  aria-label="Delete collection"
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          <div className="prose max-w-none mb-6">
            <p>{collection.description}</p>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-4">Collection Items</h2>
            {collection.items && collection.items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {collection.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-lg p-4"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-md mb-2"
                      />
                    )}
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No items in this collection yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionDetails; 