import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CollectionProvider } from './context/CollectionContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import CollectionDetails from './pages/CollectionDetails';
import CreateCollection from './pages/CreateCollection';
import EditCollection from './pages/EditCollection';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorBoundary from './components/common/ErrorBoundary';
import { ROUTES } from './utils/constants';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AuthProvider>
          <CollectionProvider>
            <Layout>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.COLLECTIONS} element={<Collections />} />
                <Route path={ROUTES.COLLECTION_DETAILS} element={<CollectionDetails />} />
                <Route path={ROUTES.CREATE_COLLECTION} element={<CreateCollection />} />
                <Route path={ROUTES.EDIT_COLLECTION} element={<EditCollection />} />
                <Route path={ROUTES.PROFILE} element={<Profile />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
              </Routes>
            </Layout>
          </CollectionProvider>
        </AuthProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
