import requestAPI from './api';

const getFolder = async ({ id }) => {
  const { data } = await requestAPI(`users/${id}/folders`);

  return data;
};

export default getFolder;
