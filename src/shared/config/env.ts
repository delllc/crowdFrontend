const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return import.meta.env[key];
};

export const API_URL = getEnvVar('VITE_API_URL');

export const isDev = import.meta.env.DEV;
export const isProd = import.meta.env.PROD;
