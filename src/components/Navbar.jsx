import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { ROUTES } from '../utils/constants';

function Navbar() {
  const { user, logout } = useAuthContext();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to={ROUTES.HOME} className="text-xl font-bold text-primary">
            Collectors
          </Link>

          <div className="flex items-center space-x-4">
            <Link to={ROUTES.COLLECTIONS} className="text-gray-600 hover:text-primary">
              Collections
            </Link>
            
            {user ? (
              <>
                <Link to={ROUTES.CREATE_COLLECTION} className="text-gray-600 hover:text-primary">
                  Create Collection
                </Link>
                <Link to={ROUTES.PROFILE} className="text-gray-600 hover:text-primary">
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-primary"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN} className="text-gray-600 hover:text-primary">
                  Login
                </Link>
                <Link
                  to={ROUTES.REGISTER}
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 