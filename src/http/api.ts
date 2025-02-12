import axios from "axios";



const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});


export const login = async (data: { email: string; password: string }) => {
  return api.post("/api/auth/login", data);
};

