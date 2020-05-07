// @ts-check
/* eslint-disable no-param-reassign */

// import crc32 from 'crc-32';

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
// const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;

const make2 = () => [];

const hasCollision = (map, key) => {
  const index = getIndex(key);
  const [currentKey] = map[index];
  return currentKey !== key;
};

const set2 = (map, key, value) => {
  const index = getIndex(key);
  if (map[index] && hasCollision(map, key)) {
    return false;
  }
  map[index] = [key, value];

  return true;
};

const get2 = (map, key, defaultValue = null) => {
  const index = getIndex(key);
  if (!map[index] || hasCollision(map, key)) {
    return defaultValue;
  }
  const [, value] = map[index];

  return value;
};




// crc32 - хеширование строк
var makeCRCTable = function(){
  var c;
  var crcTable = [];
  for(var n =0; n < 256; n++){
      c = n;
      for(var k =0; k < 8; k++){
          c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
      }
      crcTable[n] = c;
  }
  return crcTable;
}

var crc32 = function(str) {
  var crcTable = window.crcTable || (window.crcTable = makeCRCTable());
  var crc = 0 ^ (-1);

  for (var i = 0; i < str.length; i++ ) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
  }

  return (crc ^ (-1)) >>> 0;
};
console.log(crc32("hellohellohellohellohellohellohellohellohellohello"));