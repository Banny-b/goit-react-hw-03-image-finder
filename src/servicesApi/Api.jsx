export const PER_PAGE = 12;


export async function fetchImages(page, query) {
    const API_KEY = '31701254-ecb8a8dfa2e64a0c8977c0303';
    const BASE_URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
    const response = await fetch(BASE_URL);
    return response.ok ? response.json() : Promise.reject(new Error('Something went wrong, please try again'));
};