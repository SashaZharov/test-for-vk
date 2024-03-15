export const ageToString = (age: number) => {
  const lastDigit = age % 10;
  const numArr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  if (age in numArr) {
    return "лет";
  }
  if (lastDigit === 1) return "год";
  if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) return "года";
  else return "лет";
};
