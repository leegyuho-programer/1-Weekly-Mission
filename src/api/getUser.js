// import requestAPI from './api';

// const getUser = async ({ userID }) => {
//   const { data } = await requestAPI(`users/${userID}`);

//   return data;
// };

// export default getUser;

// export async function getUser({ userID }) {
//   const userRes = await fetch(`${API.users}/${id}`);
//   const userInfo = await userRes.json();
//   if (userRes?.status === 200) return userInfo.data[0];
//   return null;
// }

import { API } from './api';

async function getUser({ id }) {
  const userRes = await fetch(`${API.users}/${id}`);
  const userInfo = await userRes.json();
  if (userRes?.status === 200) return userInfo.data[0];
  return null;
}

export default getUser;
