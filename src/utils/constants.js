export const APP_NAME = 'Collectors';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  COLLECTIONS: '/collections',
  CREATE_COLLECTION: '/collections/create',
  EDIT_COLLECTION: '/collections/:id/edit',
  COLLECTION_DETAILS: '/collections/:id',
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    PROFILE: '/auth/profile',
  },
  COLLECTIONS: {
    BASE: '/collections',
    BY_ID: (id) => `/collections/${id}`,
  },
};

export const COLLECTION_CATEGORIES = [
  'Art',
  'Books',
  'Coins',
  'Comics',
  'Fashion',
  'Movies',
  'Music',
  'Photography',
  'Sports',
  'Stamps',
  'Toys',
  'Other',
];

export const COLLECTION_CONDITIONS = [
  'Mint',
  'Near Mint',
  'Excellent',
  'Very Good',
  'Good',
  'Fair',
  'Poor',
];

export const ERROR_MESSAGES = {
  AUTH: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    EMAIL_EXISTS: 'Email already exists',
    WEAK_PASSWORD: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number',
  },
  COLLECTION: {
    CREATE_FAILED: 'Failed to create collection',
    UPDATE_FAILED: 'Failed to update collection',
    DELETE_FAILED: 'Failed to delete collection',
    FETCH_FAILED: 'Failed to fetch collection',
  },
  GENERAL: {
    NETWORK_ERROR: 'Network error occurred. Please check your connection.',
    SERVER_ERROR: 'Server error occurred. Please try again later.',
    UNKNOWN_ERROR: 'An unknown error occurred. Please try again.',
  },
};

export const SUCCESS_MESSAGES = {
  AUTH: {
    LOGIN: 'Successfully logged in',
    REGISTER: 'Successfully registered',
    LOGOUT: 'Successfully logged out',
    PROFILE_UPDATE: 'Profile updated successfully',
  },
  COLLECTION: {
    CREATE: 'Collection created successfully',
    UPDATE: 'Collection updated successfully',
    DELETE: 'Collection deleted successfully',
  },
};

export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  NAME_MAX_LENGTH: 50,
  DESCRIPTION_MAX_LENGTH: 500,
  TITLE_MAX_LENGTH: 100,
};
