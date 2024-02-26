import useSWR from "swr";
import api from "./api";

export const useFetch = <Data = any>(url: string, token?: string) => {

  const { data, isLoading, error } = useSWR<Data>(url, async url => {
    const headers: HeadersInit = {};
    if (token) {
      headers.Authorization = `${token}`;
    }

  const response = await api.get(url, {
      headers,
    });  
  
  return response.data
  }, 
  
  {
    revalidateOnMount: true
  })
 
  return {
    data,
    error,
    isLoading
  };
};
