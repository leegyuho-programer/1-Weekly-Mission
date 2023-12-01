import { API } from './api';

// const getLink = async ({ userID, folderID }) => {
//   if (folderID === '0' || !folderID) {
//     const { data } = await requestAPI(`users/${userID}/links`);
//     return data;
//   } else {
//     const { data } = await requestAPI(
//       `users/${userID}/links?folderId=${folderID}`
//     );
//     return data;
//   }
// };

// export default getLink;

async function getLink({ id, folderId = ' ' }) {
  const res = await fetch(
    `${API.baseURL}/users/${id}/links?folderId=${folderId}`
  );
  const links = await res.json();
  if (res?.status === 200) return links?.data || [];
  return [];
}

export default getLink;
