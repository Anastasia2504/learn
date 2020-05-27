const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
      mkdir('data'),
    ]),
  ]),
  mkdir('logs'),
  mkfile('hosts'),
]);

const findEmptyDirPaths = (tree) => {
  const name = getName(tree);
  // Если узел — директория, получаем его детей
  const children = getChildren(tree);
  // Если детей нет, то добавляем директорию
  if (children.length === 0) {
    return name;
  }

  // Удаляем файлы, они нас не интересуют 
  const emptyDirNames = children.filter((child) => !isFile(child))
    // Ищем пустые директории внутри текущей
    // flatMap выправляет массив, так что он остаётся плоским
    .flatMap(findEmptyDirPaths);

  return emptyDirNames;
};

findEmptyDirPaths(tree); // ['apache', 'data', 'logs']

// функция flatMap()
// Метод flatMap() сначала применяет функцию к каждому элементу, а затем преобразует полученый результат в плоскую структуру и помещает в новый массив. Это идентично map функции, с последующим применением функции flat с параметром depth ( глубина ) равным 1, но flatMap часто бывает полезным, так как работает немного более эффективно.
arr1.flatMap(x => [x * 2]);
// is equivalent to
arr1.reduce((acc, x) => acc.concat([x * 2]), []);
// [2, 4, 6, 8]

const findEmptyPaths = (tree) => {
  // Внутренняя функция, которая может передавать аккумулятор
  // В качестве аккумулятора выступает depth, переменная содержащая текущую глубину
  const iter = (node, depth) => {
    const name = getName(node);
    const children = getChildren(node);

    // Если детей нет, то добавляем директорию
    if (children.length === 0) {
      return name;
    }

    // Если это второй уровень вложенности, и директория не пустая
    // то не имеет смысла смотреть дальше
    if (depth === 2) {
      // Почему возвращается именно пустой массив?
      // Потому что снаружи выполняется flat
      // Он раскрывает пустые массивы
      return [];
    }

    // Оставляем только директории
    return children.filter(isDirectory)
      // Не забываем увеличивать глубину
      .flatMap((child) => iter(child, depth + 1));

  };

  // Начинаем с глубины 0
  return iter(tree, 0);
};

findEmptyDirPaths(tree); // ['apache', 'logs']

// использовать в качестве значения по умолчанию бесконечность Infinity:
// const findEmptyDirPaths = (tree, depth = Infinity) => {
//   // ...
// }

// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и подстроку, а возвращает список файлов, имена которых содержат эту подстроку. Функция должна вернуть полные пути до файлов.
const findFilesByName = (tree, substr) => {
  const iter = (node, ancestry) => {
    const name = getName(node);
    const newAncestry = path.join(ancestry, name);
    if (isFile(node)) {
      return name.includes(substr) ? newAncestry : [];
    }
    const children = getChildren(node);
    return children.flatMap((child) => iter(child, newAncestry));
  };

  return iter(tree, '');
};

export default findFilesByName;