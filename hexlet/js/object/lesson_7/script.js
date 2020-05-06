// @ts-check
/* eslint-disable no-param-reassign */

import crc32 from 'crc-32';

// BEGIN (write your solution here)

let N = 1000

function make() {
  return [[],[]];
}

function map_index(key) {
  let key_hash = crc32.str(key);
  let i = key_hash % N;
  return i;
}

function set(map, key, value) {
  let i = map_index(key);
  if (map[1][i] == undefined || map[1][i] == key) {
    map[0][i] = value;
    map[1][i] = key;
    return true;
  } else {
    return false;
  }
}

function get(map, key, def) {
  let i = map_index(key);
  if (map[1][i] == key) {
    return map[0][i];
  } else if (def !== undefined) {
    return def;
  } else {
    return null;
  }
}



// 2 вариант
const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;

const make = () => [];

const hasCollision = (map, key) => {
  const index = getIndex(key);
  const [currentKey] = map[index];
  return currentKey !== key;
};

const set = (map, key, value) => {
  const index = getIndex(key);
  if (map[index] && hasCollision(map, key)) {
    return false;
  }
  map[index] = [key, value];

  return true;
};

const get = (map, key, defaultValue = null) => {
  const index = getIndex(key);
  if (!map[index] || hasCollision(map, key)) {
    return defaultValue;
  }
  const [, value] = map[index];

  return value;
};

export { make, set, get };
// END