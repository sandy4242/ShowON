const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
};

export const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || 'An error occurred');
  }
  return response.json();
};

export const api = {
  get: async (endpoint, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        ...getAuthHeaders(),
        ...options.headers,
      },
    });
    return handleResponse(response);
  },

  post: async (endpoint, data, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      ...options,
      headers: {
        ...getAuthHeaders(),
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  put: async (endpoint, data, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      ...options,
      headers: {
        ...getAuthHeaders(),
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  delete: async (endpoint, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      ...options,
      headers: {
        ...getAuthHeaders(),
        ...options.headers,
      },
    });
    return handleResponse(response);
  },
}; 