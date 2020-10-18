const process_env = process.env.NODE_ENV || 'development';

export default {
  API_HOST: 'http://localhost:8000/api',
  ENV: process_env,
  IS_DEV: process_env === 'development',
};
