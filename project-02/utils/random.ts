export function generateRandomBetween(min: number, max: number, exclude: number) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (exclude==rndNum) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }