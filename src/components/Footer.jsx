import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600">
              Collectors is a platform for showcasing and managing your collections.
              Join our community of passionate collectors today.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.HOME} className="text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to={ROUTES.COLLECTIONS} className="text-gray-600 hover:text-primary">
                  Collections
                </Link>
              </li>
              <li>
                <Link to={ROUTES.LOGIN} className="text-gray-600 hover:text-primary">
                  Login
                </Link>
              </li>
              <li>
                <Link to={ROUTES.REGISTER} className="text-gray-600 hover:text-primary">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: support@collectors.app</li>
              <li className="text-gray-600">Phone: (555) 123-4567</li>
              <li className="text-gray-600">Address: 123 Collector St, City, Country</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Collectors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 