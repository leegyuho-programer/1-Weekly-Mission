import requestAPI from './api';

const getLink = async ({ userID, folderID }) => {
  if (folderID === '0' || !folderID) {
    const { data } = await requestAPI(`users/${userID}/links`);
    return data;
  } else {
    const { data } = await requestAPI(
      `users/${userID}/links?folderId=${folderID}`
    );
    return data;
  }
};

export default getLink;
