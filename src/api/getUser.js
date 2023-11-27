import requestAPI from './api';

const getUser = async ({ userID }) => {
  const { data } = await requestAPI(`users/${userID}`);

  return data;
};

export default getUser;
