export const formatPopulation = (population) => {
  const populationString = population.toString();
  let formattedPopulation = [];
  let count = 1;

  for (let i = populationString.length - 1; i >= 0; i -= 1) {
    formattedPopulation.push(populationString[i]);
    if (i !== populationString.length - 1 && count % 3 === 0) {
      formattedPopulation.push(', ');
    }
    count += 1;
  }

  return formattedPopulation.reverse().join('');
};
