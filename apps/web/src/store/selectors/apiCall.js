export const getApiCall = (state, path, type = 'GET') => {
  const key = `${type}@${path}`;

  return state.apiCall[key];
};
