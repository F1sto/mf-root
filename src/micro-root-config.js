import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@micro/react-app",
  app: () => System.import("@micro/react-app"),
  activeWhen: (location) =>
    location.pathname.startsWith('/react-app') ||
    location.pathname === '/',
});

registerApplication({
  name: "@micro/vue-cli",
  app: () => System.import("@micro/vue-cli"),
  activeWhen: (location) =>
    location.pathname.startsWith('/vue-cli') ||
    location.pathname === '/',
});

registerApplication({
  name: "@micro/vite-vue",
  app: () => System.import('@micro/vite-vue'),
  activeWhen: (location) =>
    location.pathname.startsWith('/vite-vue') ||
    location.pathname === '/',
});

// add importmap
(function () {
  window.localStorage.setItem('devtools', 'true')
})();

start();
