import { API } from './api';

// const getFolder = async ({ folderID }) => {
//   const { data } = await requestAPI(`users/${folderID}/folders`);

//   return data;
// };

// export default getFolder;

async function getFolder({ id }) {
  const res = await fetch(`${API.baseURL}/users/${id}/folders`);
  const folders = await res.json();
  if (res?.status === 200) return folders.data;
  return null;
}

export default getFolder;
