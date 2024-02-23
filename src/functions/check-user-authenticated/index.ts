export const checkUserAuthenticated = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const userToken = localStorage.getItem('@userToken');
  return !!userToken;
}