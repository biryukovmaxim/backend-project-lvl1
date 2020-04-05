const checkAndAnswer = (checkParams, checkFunction) => {
  const bool = checkFunction(checkParams);

  const boolToAnswer = () => {
    if (bool) return 'yes';
    return 'no';
  };

  return [checkParams, boolToAnswer(bool)];
};

export default checkAndAnswer;
