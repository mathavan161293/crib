// export const getData = async () => {
//   const response = await fetch(`https://fakestoreapi.com/products?limit=9`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   return await response.json();
// };

// export const getSingleData = async (id: string) => {
//   const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   return await response.json();
// };

export const getCribs = async () => {
  const response = await fetch(`http://localhost:8080/cribs`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const postCrib = async (data: any) => {
  const response = await fetch(`http://localhost:8080/cribs`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const updateCrib = async (id: string, data: any) => {
  const response = await fetch(`http://localhost:8080/cribs/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const removeCrib = async (id: string) => {
  const response = await fetch(`http://localhost:8080/cribs/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response;
};
