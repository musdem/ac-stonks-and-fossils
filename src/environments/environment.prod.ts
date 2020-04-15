export const environment = {
  production: true
};

export const api = {
  base: 'https://saf.zmuni.ch/api',
  login: '/login',
  createAccount: '/create',
  verify: '/verify',
  update: '/update-info',
  getPubKey: '/get-pub-key',
  stonks: '/stonks',
  sellStonks: '?sell=true',
  buyStonks: '?buy=true',
  fossils: '/fossils',
  sellFossils: '/sell',
  buyFossils: '/buy',
  deleteFossils: '/delete',
  ownedFossils: '/own'
};
