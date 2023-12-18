import instanceAxios from "../../utils/instanceAxios";

export const apiGetMe = async () => {
  const rs = await instanceAxios("user/get-me", {
    method: "get",
  });
  return rs.data;
};
