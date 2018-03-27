function add(number) {
  function curriedAdd(newNum) {
    return add(number + newNum);
  }
  curriedAdd.valueOf = function() {
    return number;
  };
  return curriedAdd;
}
