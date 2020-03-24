const getRandomInt = (...params) => {
  let min;
  let max;
  if (params.length === 0) [min, max] = [0, 100];
  else [min, max] = [params[0], params[1]];
  return Number(Math.floor(Math.random() * (max - min + 1)) + min);
};
export default getRandomInt;
