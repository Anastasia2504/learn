// Функция проверяет тип узла. Если узел — это файл, тогда из функции возвращается единица.
// В случае, если узел — директория, тогда получаем детей и для каждого ребёнка вновь вызываем нашу функцию. Затем повторяем алгоритм заново.
// Вызов функции на каждом ребёнке возвращает свой собственный результат (количество его потомков). Эти результаты образуют массив с числами, которые нужно объединить.
// В конце считается общее количество всех потомков узла + единица (текущий узел сам по себе).
const tree = mkdir('/', [
  mkdir('etc', [
    mkfile('bashrc'),
    mkfile('consul.cfg'),
  ]),
  mkfile('hexletrc'),
  mkdir('bin', [
    mkfile('ls'),
    mkfile('cat'),
  ]),
]);

// В реализации используем рекурсивный процесс,
// чтобы добраться до самого дна дерева.
const getNodesCount = (tree) => {
  if (isFile(tree)) {
    // Возвращаем 1 для учёта текущего файла
    return 1;
  }

  // Если узел — директория, получаем его детей
  const children = getChildren(tree);
  // Самая сложная часть
  // Считаем количество потомков для каждого из детей,
  // вызывая рекурсивно нашу функцию getNodesCount
  const descendantCounts = children.map(getNodesCount);
  // Возвращаем 1 (текущая директория) + общее количество потомков
  return 1 + _.sum(descendantCounts);
};

getNodesCount(tree); // 8

// Реализуйте и экспортируйте по умолчанию функцию, которая считает количество скрытых файлов в директории и всех поддиректориях. Скрытым файлом в Linux системах считается файл, название которого начинается с точки.
const getHiddenFilesCount = (tree) => {
  let sum = 0;
  const children = getChildren(tree);

  const newCount = children.map((child) => {
    const name = getName(child);
    console.log(name);
    if(isFile(child) && name[0] === '.') {
    return 1;
  } else if(child.type === 'directory'){
    return getHiddenFilesCount(child);
  }
});
  return _.sum(newCount);
}

const getHiddenFilesCount2 = (node) => {
  const name = getName(node);
  if (isFile(node)) {
    return name.startsWith('.') ? 1 : 0;
  }

  const children = getChildren(node);
  const hiddenFilesCounts = children.map(getHiddenFilesCount);
  return _.sum(hiddenFilesCounts);
};

export default getHiddenFilesCount;