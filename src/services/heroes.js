export default {
  sort({ heroes, isAsc = true }) {
    const [value1, value2] = isAsc ? [1, -1] : [-1, 1];

    return heroes.sort((a, b) => {
      if (b.name < a.name) return value1;
      if (b.name > a.name) return value2;
      return 0;
    });
  },
};
