// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const api = {
  base: 'http://localhost:3000',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
