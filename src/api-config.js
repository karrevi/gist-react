let BASE_URL;
if (window.location.href.includes('localhost')) {
    BASE_URL = 'http://localhost:8000'
} else {
    BASE_URL = ''
}

export const API_URL = BASE_URL + '/api/v1';
export const IMG_URL = BASE_URL + '/images';