import { API_URL } from '../components/constants.js';

export async function getFolders() {
  const response = await fetch(`${API_URL}sample/folder`);
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
  }
  const data = await response.json();
  return data;
}