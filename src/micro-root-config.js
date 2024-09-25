import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@micro/react-app",
  app: () => System.import("@micro/react-app"),
  activeWhen: (location) => location.pathname.startsWith('/react-app'),
});

registerApplication({
  name: "@micro/vue-cli",
  app: () => System.import("@micro/vue-cli"),
  activeWhen: (location) => location.pathname.startsWith('/vue-cli'),
});

registerApplication({
  name: "@micro/vite-vue",
  app: () => System.import('@micro/vite-vue'),
  activeWhen: (location) => location.pathname.startsWith('/vite-vue'),
});

// add importmap
(function () {
  window.localStorage.setItem('devtools', 'true')
})();

start();
