import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE + '/api',
  withCredentials: true
});

// 서버 응답의 이미지 URL이 HTTP IP 주소로 오는 경우 HTTPS 도메인으로 변환
export const normalizeImageUrl = (url) => {
  if (!url || !url.startsWith('http://')) return url;
  if (!API_BASE.startsWith('https://')) return url;
  return url.replace(/^http:\/\/[^/]+/, API_BASE);
};

export default api;
