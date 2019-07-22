import './env';

interface Config {
  development: {
    DB_URL: string;
  };
  production: {
    DB_URL: string;
  };
}

const config: Config = {
  development: {
    DB_URL: 'mongodb://localhost/reception-homepage-dev',
  },
  production: {
    DB_URL: 'mongodb://localhost/reception-homepage-prod',
  },
};

const getSettings = <T extends keyof Config>(env: T) => config[env];

const defaultConfig = {
  PORT: process.env.PORT || 9999,
};

export default {
  ...defaultConfig,
  ...getSettings(process.env.NODE_ENV as keyof Config),
};
