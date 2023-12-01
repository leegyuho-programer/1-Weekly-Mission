// import requestAPI from './api';

// const getSampleUser = async () => {
//   const { result } = await requestAPI('sample/user');
//   return result;
// };

// export default getSampleUser;

import { API } from '../config';

async function getSampleUser() {
  const userRes = await fetch(API.sampleUser);
  const userInfo = await userRes.json();
  if (userRes?.status === 200) return userInfo;
  return null;
}

export default getSampleUser;
