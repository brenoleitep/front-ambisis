// 'use client'
// import { useState } from 'react';
// import api from "./api";
// import { CompaniesProps } from "./types";

// const useCompanyData = () => {
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTcwODUyODc2OH0.JEfWyEHiDlUWUg5NOUj0_D9onHrJ3CsDaZtui5TIIKo"; 
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   };

//   const [isLoading, setIsLoading] = useState(false);
//   const [companies, setCompanies] = useState<CompaniesProps[]>([]);

//   const getCompanies = async () => {
//     setIsLoading(true);
//     try {
//       const response = await api.get<CompaniesProps []>('/company/listCompany', config);
//       setCompanies(response.data);
//     } catch (error) {
//       console.error('Erro ao obter empresas:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   console.log(companies)

//   return {
//     companies,
//     isLoading,
//     getCompanies,
//   };
// }

// export default useCompanyData;
