const transform = (params) => {
  let progression = false;
  const getRandomInt = (min, max) => Number(Math.floor(Math.random() * (max - min + 1)) + min);

  const makeProgression = (array) => {
    const [a0, delta, substitutionNumber] = array;
    const progressionArray = [];
    for (let i = 0; i < 10; i += 1) {
      progressionArray[i] = (i === substitutionNumber) ? '..' : a0 + delta * i;
    }
    return progressionArray;
  };

  const questionArray = params.map((element) => {
    if (element.type === 'mathSymbol') {
      const caseNumber = (getRandomInt(element.min, element.max));
      switch (caseNumber) {
        case 0:
          return '+';
        case 1:
          return '-';
        case 2:
          return '*';
        default:
          break;
      }
    }
    if (element.type === 'number') return getRandomInt(element.min, element.max);
    if (element.type === 'progressNumber') {
      progression = true;
      return getRandomInt(element.min, element.max);
    }
    return '';
  });
  if (progression) {
    return {
      question: makeProgression(questionArray),
      forGameFunction: questionArray,
    };
  }
  return {
    question: questionArray,
    forGameFunction: questionArray,
  };
};


export default transform;
