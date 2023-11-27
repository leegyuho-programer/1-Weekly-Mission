import requestAPI from './api';

const sampleFolder = async () => {
  const { result } = await requestAPI('sample/folder');
  return result;
};

export default sampleFolder;
