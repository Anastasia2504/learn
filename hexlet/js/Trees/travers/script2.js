const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
  ]),
  mkdir('consul', [
    mkfile('config.json'),
    mkfile('file.tmp'),
    mkdir('data'),
  ]),
  mkfile('hosts'),
  mkfile('resolve'),
]);

console.log(getSubdirectoriesInfo(tree));

// Подсчёт количества файлов внутри директории
// Вызов функции подсчёта файлов на каждой из поддиректорий

// Начнём с подсчёта количества файлов. Это классическая задача на агрегацию:

const getFilesCount = (node) => {
  if (isFile(node)) {
    return 1;
  }

  const children = getChildren(node);
  const descendantCounts = children.map(getFilesCount);
  return _.sum(descendantCounts);
};
// Следующий шаг заключается в том, чтобы извлечь всех детей из исходного узла и к каждому из них применить подсчёт:
const getSubdirectoriesInfo = (tree) => {
  const children = getChildren(tree);
  const result = children
    // Нас интересуют только директории
    .filter(isDirectory)
    // Запускаем подсчёт для каждой директории
    .map((child) => [getName(child), getFilesCount(child)]);

  return result;
}
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию, а возвращает список узлов вложенных (директорий и файлов) в указанную директорию на один уровень и место которое они занимают. Размер файла задается в метаданных. Размер директории складывается из сумм всех размеров файлов находящихся внутри во всех подпапках. Сами папки размера не имеют.
const sizeOf = (tree) => isFile(tree)? getMeta(tree).size: _.sumBy(getChildren(tree), child => sizeOf(child));
const du = (tree) => getChildren(tree).map(child => [getName(child), sizeOf(child)]).sort((a, b) => b[1] - a[1]);


const calculatefilesSize = (tree) => {
  if (isFile(tree)) {
    const meta = getMeta(tree);
    return meta.size;
  }

  const children = getChildren(tree);
  const sizes = children.map(calculatefilesSize);
  return _.sum(sizes);
};

const du = (tree) => {
  const children = getChildren(tree);
  const result = children.map((child) => [getName(child), calculatefilesSize(child)]);
  // Destructuring
  result.sort(([, size1], [, size2]) => size2 - size1);
  return result;
};

export default du;