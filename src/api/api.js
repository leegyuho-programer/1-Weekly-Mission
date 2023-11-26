const BASE_URL = 'https://bootcamp-api.codeit.kr/api/';

async function requestAPI(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  const data = await response.json();
  return { response, data };
}

export default requestAPI;
