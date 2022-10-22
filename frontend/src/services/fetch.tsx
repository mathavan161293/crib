import { FormCrib } from "../interface/crib";

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getCribs = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}cribs`, {
    method: "GET",
    headers,
  });

  return await response.json();
};

export const postCrib = async (data: FormCrib) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}cribs`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const updateCrib = async (id: string, data: FormCrib) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}cribs/${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const removeCrib = async (id: string) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}cribs/${id}`, {
    method: "DELETE",
    headers,
  });

  return response;
};
