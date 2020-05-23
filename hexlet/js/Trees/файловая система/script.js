// mkdir вторым параметром принимает список детей,
// которые могут быть либо директориями, созданными mkdir,
// либо файлами, созданными mkfile
const tree = mkdir('etc', [
  mkfile('bashrc'),
  mkdir('consul', [
    mkfile('config.json'),
  ]),
]);

// Представление директории:

let dir = {
  name: 'value',
  type: 'directory',
  meta: {}, // Свойства директории
  children: [/* ... */], // Здесь хранятся дети
}

// Представление файла:

let type = {
  name: 'value',
  type: 'file',
  meta: {}, // Свойства файла
}
// type определяет тип узла и с его помощью можно понять, что перед нами во время обработки этого дерева
// meta — объект с произвольными данными, например, размером, датой создания и так далее.

export default () => {
  const tree = mkdir('nodejs-package', [
    mkfile('Makefile'),
    mkfile('README.md'),
    mkdir('dist'),
    mkdir('__tests__', [
      mkfile('half.test.js', { type: 'text/javascript' }),
    ]),
    mkfile('babel.config.js', { type: 'text/javascript' }),
    mkdir('node_modules', [
      mkdir('@babel', [
        mkdir('cli', [
          mkfile('LICENSE'),
        ]),
      ]),
    ], { owner: 'root', hidden: false }),
  ], { hidden: true });
  return tree;
};

// Базовые операции с узлами

import {
  mkfile, mkdir, getChildren, getMeta, getName,
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [mkfile('hexlet.log')], { hidden: true });
getName(tree); // '/'
getMeta(tree).hidden; // true

const [ file ] = getChildren(tree);
getName(file); // 'hexlet.log'
getMeta(file).unknown; // undefined

// А вот так делать не надо
// У файлов нет детей
getChildren(file);

// проверить тип данных
import {
  mkfile, mkdir, isFile, isDirectory, getChildren,
} from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [mkfile('hexlet.log')], { hidden: true });
isDirectory(tree); // true
isFile(tree); // false

const [ file ] = getChildren(tree);
isFile(file); // true
isDirectory(file); // false

// Обработка
const file = mkfile('one', { size: 35 });

// При переименовании важно сохранить метаданные
// _ – lodash
const newMeta = _.cloneDeep(getMeta(file));
const newFile = mkfile('new name', newMeta);

// Сортировка содержимого директории
// Сортировка в обратном порядке
const tree = mkdir('/', [
  mkfile('one'),
  mkfile('two'),
  mkdir('three'),
]);

const children = getChildren(tree);
const newMeta = _.cloneDeep(getMeta(tree));
// reverse изменяет массив, поэтому клонируем
const newChildren = children.slice().reverse();
const tree2 = mkdir(getName(tree), newChildren, newMeta);

// Обновление содержимого директории
// Приведение к нижнему регистру имён директорий и файлов
// внутри конкретной директории

const tree = mkdir('/', [
  mkfile('oNe'),
  mkfile('Two'),
  mkdir('THREE'),
]);

const children = getChildren(tree);
const newChildren = children.map((child) => {
  const name = getName(child);
  const newMeta = _.cloneDeep(getMeta(child));
  if (isDirectory(child)) {
    return mkdir(name.toLowerCase(), getChildren(child), newMeta);
  }
  return mkfile(name.toLowerCase(), newMeta);
});
// Обязательно копируем метаданные
const newMeta = _.cloneDeep(getMeta(tree));
const tree2 = mkdir(getName(tree), newChildren, newMeta);

// Удаление файлов внутри директории
const tree = mkdir('/', [
  mkfile('one'),
  mkfile('two'),
  mkdir('three'),
]);

const children = getChildren(tree);
const newChildren = children.filter(isDirectory);
const newMeta =  _.cloneDeep(getMeta(tree));
const tree2 = mkdir(getName(tree), newChildren, newMeta);


import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const compressImages = (tree) => {
  const children = getChildren(tree);
  const newChildren = children.map((child) => {
    const name = getName(child);
    if(isFile(child)) {
      if(name.indexOf('.jpg') !== -1) {
        let oldMeta = getMeta(child);
        let newMeta = _.cloneDeep(oldMeta);
        newMeta.size = +newMeta.size / 2;
        console.log(newMeta);
        return mkfile(name, newMeta);
      }
    }
    return child;
  });
  const newMeta = _.cloneDeep(getMeta(tree));
  const tree2 = mkdir(getName(tree), newChildren, newMeta);
  return tree2;
}
export {compressImages};