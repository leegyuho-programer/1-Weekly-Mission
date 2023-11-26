import API from './api';

const getUser = async ({ id }) => {
  const response = await fetch(`${API.users}/users/${id}`);
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data;
};

export default getUser;
