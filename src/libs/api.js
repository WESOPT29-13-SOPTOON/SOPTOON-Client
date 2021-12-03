import axios from "axios";

const client = axios.create({
  baseURL: "https://asia-northeast3-we-sopt-29-46fb9.cloudfunctions.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getWebtoonInfo = async () => {
  try {
    const { data } = await client.get("/webtoon/recommend");
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getComments = async (id) => {
  try {
    const { data } = await client.get(`/comment/${id}`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getBestComments = async (id) => {
  try {
    const { data } = await client.get(`/comment/${id}/best`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const postComment = async ({ webtoonId, email, comment }) => {
  try {
    const { data } = await client.post(`/comment`, {
      webtoonId,
      email,
      comment,
    });
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
