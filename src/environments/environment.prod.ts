export const environment = {
  production: true
};

export const api = {
  base: 'http://saf.zmuni.ch/api',
  login: '/login',
  createAccount: '/create',
  verify: '/verify',
  getPubKey: '/get-pub-key',
  stonks: '/stonks',
  sellStonks: '?sell=true',
  buyStonks: '?buy=true'
};
