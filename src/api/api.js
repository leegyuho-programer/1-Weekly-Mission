// const BASE_URL = 'https://bootcamp-api.codeit.kr/api/';

// async function requestAPI(url) {
//   const response = await fetch(`${BASE_URL}${url}`);
//   const data = await response.json();
//   return { response, data };
// }

// export default requestAPI;

const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export const API = {
  sampleUser: `${BASE_URL}/sample/user`,
  sampleFolder: `${BASE_URL}/sample/folder`,
  users: `${BASE_URL}/users`,
  baseURL: `${BASE_URL}`,
};
