import instanceAxios from "../../utils/instanceAxios";

export const apiRegister = async (data: {
  name: string;
  phone: number;
  role: string;
  password: string;
}) => {
  const rs = await instanceAxios("auth/register", {
    method: "post",
    data: data,
  });
  return rs;
};

export const apiLogin = async (data: { phone: number; password: string }) => {
  const rs = await instanceAxios("auth/login", {
    method: "post",
    data: data,
  });
  return rs.data;
};
