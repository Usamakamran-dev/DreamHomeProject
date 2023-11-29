import ReactGA from 'react-ga';
ReactGA.initialize('G-BPYBT92NRZ');

export const trackPageView = () => {
  const pagePath = window.location.pathname + window.location.search;
  console.log(`Page view: ${pagePath}`);
  ReactGA.pageview(pagePath);
};
