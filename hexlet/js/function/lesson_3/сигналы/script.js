// Реализуйте и экспортируйте по умолчанию функцию getFreeDomainsCount, которая принимает на вход список емейлов, а возвращает количество емейлов, расположенных на каждом бесплатном домене. Список бесплатных доменов хранится в константе freeEmailDomains.
function getFree(arr) {
  let res = [];
  let freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
  ];
  let freeArr = arr.filter((d) => {
    d = d.split('@')[1];
    for(let fdomain of freeEmailDomains) {
      if(d === fdomain) {
        return true;
      }
    }
    return false;
  });

  freeArr.map((a) => {
    a = a.split('@').splice(1,1);
    res.push(a);
    return res;
  });
  res = res.flat();
  
  let freeEmails = res.reduce((a, b) => {
    if(a.hasOwnProperty(b) === true) {
      a[b] +=1;
    } else {
      a[b] = 1;
    }
    return a;
  }, {});

  return freeEmails;
}

let emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];
console.log(getFree(emails));