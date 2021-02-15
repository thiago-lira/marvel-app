export default (key, defaultValue) => {
  const ls = {
    get() {
      const value = localStorage.getItem(key);
      return JSON.parse(value);
    },
    set(value) {
      const valueStr = JSON.stringify(value);
      localStorage.setItem(key, valueStr);
    },
  };

  if (!ls.get()) {
    ls.set(defaultValue);
  }

  return ls;
};
