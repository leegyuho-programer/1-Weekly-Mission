// import requestAPI from './api';

// const sampleFolder = async () => {
//   const { result } = await requestAPI('sample/folder');
//   return result;
// };

// export default sampleFolder;

import { API } from './api';

async function getSampleFolder() {
  const res = await fetch(API.sampleFolder);
  const userFolder = await res.json();
  if (res?.status === 200) return userFolder;
  return null;
}

export default getSampleFolder;
