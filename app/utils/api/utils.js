import axios from 'axios';
import { handleError } from './handleError';

export const axiosInstance = (needAuth = false) => {
  const SERVER_URL = process.env.BASE_URL;
  const authToken = needAuth ? localStorage.getItem('auth_token') : null;
  return axios.create({
    baseURL: `${SERVER_URL}/api/v1`,
    timeout: 15000,
    headers: {
      Authorization: `${authToken}`,
    },
  });
};

export const get = (path, needAuth = false, params = null) => {
  const instance = axiosInstance(needAuth);

  return new Promise((resolve, reject) => {
    instance.get(path, params)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(handleError(error.response));
      });
  });
};

export const post = (path, needAuth = false, data) => {
  const instance = axiosInstance(needAuth);

  return new Promise((resolve, reject) => {
    instance.post(path, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(handleError(error.response));
      });
  });
};

export const put = (path, needAuth = false, data) => {
  const instance = axiosInstance(needAuth);

  return new Promise((resolve, reject) => {
    instance.put(path, data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(handleError(error.response));
      });
  });
};

export const del = (path, needAuth = false) => {
  const instance = axiosInstance(needAuth);
  return new Promise((resolve, reject) => {
    instance.delete(path)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(handleError(error.response));
      });
  });
};
