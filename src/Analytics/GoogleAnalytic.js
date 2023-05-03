import ReactGA from 'react-ga';

class GAClass {
  constructor() {
    this.reactGA = ReactGA;
  }

  init() {
    const TRACKING_ID = 'G-HX2V9VBWRR';
    const isDev =
      !process.env.NODE_ENV || process.env.NODE_ENV !== 'production';
    if (isDev) return;
    this.reactGA.initialize(TRACKING_ID, { debug: isDev });
  }

  sendPageView(path) {
    const isDev =
      !process.env.NODE_ENV || process.env.NODE_ENV !== 'production';
    if (isDev) return;
    this.reactGA.set({ page: path });
    this.reactGA.pageview(path);
  }
}

export const GA = new GAClass();
