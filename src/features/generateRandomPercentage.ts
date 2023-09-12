export const generateRandomPercentages = (): [number, number, number] => {
  // Генерируем 3 случайных числа от 1 до 98
  const random1 = Math.floor(Math.random() * 98) + 1;
  const random2 = Math.floor(Math.random() * (99 - random1)) + 1;
  
  // Вычисляем третий процент так, чтобы сумма была 100
  const random3 = 100 - random1 - random2;
  
  return [random1, random2, random3];
}

export const generateArrays = (array: string[]): [string[], number[]] => {
    const valuesArray: string[] = [];
    const percentagesArray: number[] = [];

    // Генерация первого массива из 3 значений
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if(valuesArray.includes(array[i])){
        const randomIndex = Math.floor(Math.random() * array.length);
        valuesArray.push(array[randomIndex]);
        continue;
      }
      valuesArray.push(array[randomIndex]);
    }

    // Генерация второго массива с рандомными процентами
    let remainingPercentage = 100;
    for (let i = 0; i < 2; i++) {
      const randomPercentage = Math.floor(Math.random() * remainingPercentage);
      percentagesArray.push(randomPercentage);
      remainingPercentage -= randomPercentage;
    }
    percentagesArray.push(remainingPercentage);

    return [valuesArray, percentagesArray];
  }