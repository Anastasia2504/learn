//     * A
//   / | \
// B * C * D
//  /|   |\
// E F   G J

// Проверяем, есть ли у вершины A дети. Если есть, то запускаем обход рекурсивно для каждого ребёнка независимо;
// Внутри первого рекурсивного вызова оказывается следующее поддерево:
// B *
//  /|
// E F
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

const dfs = (tree) => {
  // Распечатываем содержимое узла
  console.log(getName(tree));
  // Если это файл, то возвращаем управление
  if (isFile(tree)) {
    return;
  }

  // Получаем детей
  const children = getChildren(tree);

  // Применяем функцию dfs ко всем дочерним элементам
  // Множество рекурсивных вызовов в рамках одного вызова функции
  // называется древовидной рекурсией
  children.map(dfs);
};

dfs(tree);
// => /
// => etc
// => bashrc
// => consul.cfg
// => hexletrc
// => bin
// => ls
// => cat