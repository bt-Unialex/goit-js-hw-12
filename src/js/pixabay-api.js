import axios from 'axios';

export function searchImage(request) {
  const API_KEY = '49253518-6fbcd3e4502fdc6eae88c44f3';
  const URL =
    'https://pixabay.com/api/?key=' +
    API_KEY +
    '&q=' +
    encodeURIComponent(request) +
    '&image_type=photo' +
    '&orientation=horizontal' +
    '&safesearch=true';

  return axios.get(URL).then(response => [...response.data.hits]);
}
