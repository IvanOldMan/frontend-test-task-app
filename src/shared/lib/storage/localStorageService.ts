import { STORAGE_KEYS } from './localStorageService.constants.ts';

export const loadRequests = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.REQUESTS);
    const parsed = data ? JSON.parse(data) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const saveRequests = (data: unknown) => {
  try {
    localStorage.setItem(STORAGE_KEYS.REQUESTS, JSON.stringify(data));
  } catch {
    console.error('Ошибка сохранения заявок');
  }
};
