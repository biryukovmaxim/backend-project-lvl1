const makeObject = (...params) => ({
  question: params[0],
  function: params[1],
  params: params[2],
});
export default makeObject;
