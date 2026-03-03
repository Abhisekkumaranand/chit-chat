import axios from "axios";

export const axiosInstance = axios.create({
  // the backend server listens on port 5000 (see backend/.env)
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : "/api",
  withCredentials: true,
});
