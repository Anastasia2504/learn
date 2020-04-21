// Чистота функций
// Функция должна удовлетворять двум условиям, чтобы считаться «чистой»:
// — Каждый раз функция возвращает одинаковый результат, когда она вызывается с тем же набором аргументов
// — Нет побочных эффектов
// Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.
export default (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const shouldBeBig = (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }

  return result;
};
// transformStr(' many different words inside sentence');
// transformStr("not a function");