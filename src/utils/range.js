const range = (from, to) => {
  if (from >= to) return [];

  return Array
    .from(new Array(to - from).keys())
    .map((num) => num + from);
};

export default range;
