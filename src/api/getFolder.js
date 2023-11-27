import requestAPI from './api';

const getFolder = async ({ folderID }) => {
  const { data } = await requestAPI(`users/${folderID}/folders`);

  return data;
};

export default getFolder;
