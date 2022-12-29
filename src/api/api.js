import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  header: {
    "API-KEY": process.env.REACT_APP_API_KEY,
  },
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 100) {
    // return instance
    //   .get(`users?page=${currentPage}&count=${pageSize}`)
    //   .then((response) => response.data)
    //   .catch((error) => {
    //     if (axios.isCancel(error)) return;
    //   });

    try {
      const response = await instance.get(
        `users?page=${currentPage}&count=${pageSize}`
      );
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) return;
    }
  },
};

export const settingsAPI = {
  getUserInfo(userId = 2) {
    return instance.get(`profile/${userId}`);
  },
  getUserStatus(userId = 2) {
    return instance.get(`profile/status/${userId}`);
  },
  updateUserStatus(status) {
    console.log("put", status);
    return instance.put(`profile/status`, { status });
  },
  savePhoto(file) {
    console.log("put", file);
    const formData = new FormData();
    formData.append("image", file);
    return instance.put(`profile/photo`, formData, {
      "Content-Type": "multipart/form-data",
    });
  },
};

export const authAPI = {
  me() {
    return instance.get("auth/me");
  },
  getCaptcha() {
    return instance.get("security/get-captcha-url");
  },
  login(email, password, rememberMe, captcha) {
    return instance.post("auth/login", {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete("auth/login");
  },
};
