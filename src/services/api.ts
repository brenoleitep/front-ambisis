import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-ambisis.onrender.com/api', 
});

  // const fetchGroups = (): Promise<CompaniesProps[]> =>
  // api.get('/api/company/listCompany', config).then((response) => response.data);


export default api;