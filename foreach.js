function arrayForEach() {
  let huruf = ["a", "b", "c"];
  huruf.forEach(function (item, index, array) {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

arrayForEach();
