function getWeekends(p) {
  if(p === "short") {
    let arr_short = ["sat", "sun"];
    return arr_short;
  } else {
    let arr_long = ["saterday","sunday"];
    return arr_long;
  }
}
console.log(getWeekends());
console.log(getWeekends("long"));
console.log(getWeekends("short"))