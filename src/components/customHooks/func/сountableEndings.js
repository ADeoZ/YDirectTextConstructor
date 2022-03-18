// окончания исчисляемых существительных
export function сountableEndings(numeral, endings) {
  let ending = "";
  const div = Math.abs(numeral) % 100 % 10;
  if (numeral > 10 && numeral < 20) {
    ending = endings[0];
  } else if (div > 1 && div < 5) {
    ending = endings[1];
  } else if (div === 1) {
    ending = endings[2];
  } else {
    ending = endings[0];
  }

  return ending;
}