/**
 * Client storage
 */
const set = (key: string, item: string) => localStorage.setItem(key, item);
const get = (key: string) => localStorage.getItem(key) || null;
const clear = () => localStorage.clear();
const remove = (key: string) => localStorage.removeItem(key);

export { set, get, clear, remove };