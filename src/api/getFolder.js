import API from './api';

const getFolder = async ({ id }) => {
  const response = await fetch(`${API.users}/${id}/folders`);
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data;
};

export default getFolder;
