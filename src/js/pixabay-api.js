export function fetchImages(value) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: "44352919-dbe9ef0ac86097ad22a8e9457",
    q: value,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url)
    .then(res => res.json());
}

