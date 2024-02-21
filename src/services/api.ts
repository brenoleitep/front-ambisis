import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-ambisis.onrender.com/api',
});

  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"; 
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // };
  // const fetchGroups = (): Promise<CompaniesProps[]> =>
  // api.get('/api/company/listCompany', config).then((response) => response.data);


export default api;