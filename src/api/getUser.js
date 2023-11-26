import requestAPI from './api';

const getUser = async ({ id }) => {
  const { data } = await requestAPI(`users/${id}`);

  return data;
};

export default getUser;
