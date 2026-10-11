const USER_KEY = "mahall_user_token";
const customerKey = (store: string) => `mahall_customer_token:${store}`;

const isBrowser = () => typeof window !== "undefined";

export const getUserToken = () =>
  isBrowser() ? localStorage.getItem(USER_KEY) : null;
export const setUserToken = (t: string) => localStorage.setItem(USER_KEY, t);
export const clearUserToken = () => localStorage.removeItem(USER_KEY);

export const getCustomerToken = (store: string) =>
  isBrowser() ? localStorage.getItem(customerKey(store)) : null;
export const setCustomerToken = (store: string, t: string) =>
  localStorage.setItem(customerKey(store), t);
export const clearCustomerToken = (store: string) =>
  localStorage.removeItem(customerKey(store));
