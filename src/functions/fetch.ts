// export async function fetchWrapper (url: string) {

//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTcwODYyMjk2Mn0.wghauYNiiz09hRK272W_ltwM31_neEGYf3FvL1YYRBI"; 
//   const config = {
//     headers: {
//       Authorization: `${token}`
//     }
//   };
//   const data = await fetch(`https://api-ambisis.onrender.com/api${url}`, config);
//   const result = await data.json()

//   return result
// }