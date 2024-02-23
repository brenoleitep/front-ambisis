export const checkUserAuthenticated = () => {
  const userToken = localStorage.getItem('@userToken');
  return !!userToken;
}