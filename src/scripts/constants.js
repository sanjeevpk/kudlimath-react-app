export const SERVER_DOMAIN = 
    window.location.origin.indexOf('localhost') > -1 ? process.env.REACT_APP_DOMAIN : window.location.origin;

export const DEVICE_WIDTH = window.innerWidth;
export const DEVICE = DEVICE_WIDTH >= 768 ? "Desktop" : 'Mobile';