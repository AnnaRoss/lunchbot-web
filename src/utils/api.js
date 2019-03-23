export const retrieveAllRestaurants = () => {
  return fetch('/api/list')
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
