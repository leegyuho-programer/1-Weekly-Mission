import requestAPI from './api';

const getSampleUser = async () => {
  const { result } = await requestAPI('sample/user');
  return result;
};

export default getSampleUser;
